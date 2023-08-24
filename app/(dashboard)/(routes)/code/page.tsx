'use client'

import BotAvatar from '@/components/dashboard/bot-avatar'
import * as z from 'zod'

import Header from '@/components/dashboard/header'
import UserAvatar from '@/components/dashboard/user-image'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'
import { formSchema } from './constants'
import axios from 'axios'
import { ChatCompletionRequestMessage } from 'openai'
import { CornerDownRightIcon } from 'lucide-react'
import Empty from '@/components/dashboard/no-conversation'
import toast from 'react-hot-toast'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useProModal } from '@/hooks/pro-modal'
import { useRouter } from 'next/navigation'

const CodePage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  const proModal = useProModal()

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

      const response = await axios.post('/api/code', {
        userMessages: newMessages,
      })
      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      // TODO OPEN PRO MODEL
      if (error.response.status === 403) {
        proModal.onOpen()
      } else {
        toast.error('Something we wrong')
      }
      console.log(error.message)
    } finally {
      router.refresh()
    }
  }

  useEffect(() => {
    if (messages.length) {
      contentRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [messages.length])
  return (
    <div className='relative'>
      <Header title='Code Helper' description='Tackle coding challenges with confidence' />
      <div className='text-gray-200 max-w-screen-md mx-auto relative px-2 md:px-0'>
        <div className='sticky top-0'>
          <div className='absolute bg-fg pb-10 w-full h-36'></div>
        </div>

        <div className='mt-10 sticky top-2 z-50'>
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
                        placeholder='Write a function to reverse a string in javascript...'
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
          <div className='mt-16 '>
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
                    <div className='flex space-x-4'>{message.content}</div>
                  ) : (
                    <ReactMarkdown
                      className='text-base overflow-hidden leading-7 markdown w-full'
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              {...props}
                              // eslint-disable-next-line react/no-children-prop
                              children={String(children).replace(/\n$/, '')}
                              style={oneDark}
                              language={match[1]}
                              PreTag='div'
                            />
                          ) : (
                            <code {...props} className='bg-gray-500/50 rounded p-1'>
                              {children}
                            </code>
                          )
                        },
                      }}
                    >
                      {message.content || ''}
                    </ReactMarkdown>
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
        <div ref={contentRef}></div>
      </div>
    </div>
  )
}

export default CodePage
