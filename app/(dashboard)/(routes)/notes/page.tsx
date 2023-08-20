'use client'
import Header from '@/components/dashboard/header'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CornerDownRightIcon, DownloadIcon } from 'lucide-react'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import { cn } from '@/lib/utils'
import UserAvatar from '@/components/dashboard/user-image'
import BotAvatar from '@/components/dashboard/bot-avatar'
import Empty from '@/components/dashboard/no-conversation'
import { Skeleton } from '@/components/ui/skeleton'

const NotesPage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/notes', {
        userMessages: newMessages,
      })
      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      // TODO OPEN PRO MODEL
      console.log(error.message)
    } finally {
    }
  }

  const handleDownload = async (content: string | undefined) => {
    try {
      console.log(content)

      // Make a POST request to the download API route
      const response = await axios.post(
        '/api/pdf',
        { content },
        {
          responseType: 'arraybuffer', // Response type for binary data
        }
      )
      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' })
      // Create a URL from the Blob
      const url = window.URL.createObjectURL(blob)
      // Create a temporary link to trigger the download
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'note_assistant_response.pdf'
      document.body.appendChild(a)
      a.click()
      // Clean up the temporary elements
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='relative'>
      <Header
        title='Note-Taking Assistant'
        description='Designed to transform your study experience'
      />
      <div className='text-gray-200 max-w-screen-md mx-auto relative px-2 md:px-0 mt-20'>
        <div className='sticky top-0 z-10'>
          <div className='absolute bg-fg pb-10 w-full h-36'></div>
        </div>

        <div className='sticky top-2 z-50'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='border border-gray-800 shadow-sm rounded-lg grid grid-cols-12 gap-2 items-center bg-[#0b0c0e] relative z-10'
            >
              <div className='absolute left-4 top-0 h-full flex items-center'>
                <BotAvatar />
              </div>
              <FormField
                control={form.control}
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-10 ml-16 relative'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        placeholder='Paste your notes here...'
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent autofill:bg-transparent h-14'
                        {...field}
                        disabled={isLoading}
                        autoComplete='off'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                variant='ghost'
                className='col-span-2 hover:bg-transparent hover:text-gray-300 h-full'
                type='submit'
                disabled={isLoading}
              >
                <CornerDownRightIcon className='w-4 h-4 mr-2' />{' '}
                <span className='hidden md:flex'>Send</span>
              </Button>
            </form>
          </Form>
        </div>

        {messages.length === 0 && !isLoading ? (
          <Empty label='No Conversations yet!' />
        ) : (
          <div className='mt-16'>
            {messages.map((message) => (
              <div
                className={cn(
                  'flex flex-col p-4',
                  message.role === 'user' && 'bg-[#0b0c0e] divide-gray-800 rounded-lg'
                )}
                key={message.content}
              >
                <div className='flex space-x-4 items-start'>
                  {message.role === 'user' ? <UserAvatar width='8' height='8' /> : <BotAvatar />}
                  {message.role === 'user' ? (
                    <ReactMarkdown className='flex space-x-4 max-h-[200px] overflow-auto leading-7 markdown text-base'>
                      {message.content || ''}
                    </ReactMarkdown>
                  ) : (
                    <div className='flex flex-col lg:flex-row relative'>
                      <ReactMarkdown className='overflow-hidden leading-7 markdown text-base'>
                        {message.content || ''}
                      </ReactMarkdown>
                      <div className='relative flex-shrink-0 flex justify-end'>
                        <Button
                          onClick={() => handleDownload(message.content)}
                          className=' bg-[#0b0c0e] hover:bg-white/10'
                        >
                          <DownloadIcon className='w-4 h-4 mr-2' /> {'PDF'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading && (
          <div className={cn('flex items-center space-x-4 p-4', messages.length === 0 && 'mt-16 ')}>
            <Skeleton className='h-8 w-8 rounded bg-gray-600' />
            <div className='space-y-2 w-full'>
              <Skeleton className='h-4 w-full rounded bg-gray-600' />
              <Skeleton className='h-4 w-4/5 rounded bg-gray-600' />
            </div>
          </div>
        )}
      </div>
      {/* <div className='bg-gray-800 rounded h-72'></div> */}
    </div>
  )
}

export default NotesPage
