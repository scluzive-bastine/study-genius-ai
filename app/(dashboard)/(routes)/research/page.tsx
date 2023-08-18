'use client'
import Header from '@/components/dashboard/header'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { BrainIcon, CornerDownRightIcon } from 'lucide-react'

const ResearchPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='relative'>
      <Header
        title='Research Paper Assistant'
        description='Navigate the complex world of academia'
      />
      <div className='text-gray-200 max-w-screen-md mx-auto relative'>
        <div className='mt-10'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='border border-gray-800 shadow-sm rounded-lg grid grid-cols-12 gap-2 relative items-center'
            >
              <div className='absolute left-2 h-full flex items-center'>
                <span className='w-8 h-8 bg-[#FF725E] flex items-center justify-center rounded'>
                  <BrainIcon className='w-4 h-4' />
                </span>
              </div>
              <FormField
                control={form.control}
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-10 ml-12 relative'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        placeholder='Ask me something...'
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent autofill:bg-transparent h-12'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                variant='ghost'
                className='col-span-2 hover:bg-transparent hover:text-gray-300 h-full'
                type='submit'
              >
                <CornerDownRightIcon className='w-4 h-4 mr-2' /> Send
              </Button>
            </form>
          </Form>
        </div>

        <div className='mt-10'>
          <div className='border border-gray-800 rounded-lg flex flex-col divide-gray-800'>
            <div className='flex space-x-4 bg-[#0b0c0e] p-4 rounded-t-lg'>
              <div className='h-8 w-8 rounded-lg bg-emerald-600 flex-shrink-0'></div>
              <p className='text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae
                quae dicta maxime amet atque molestiae ipsum maiores distinctio debitis veritatis,
                voluptatum sint ratione dolorem tempora, minus architecto labore voluptatem!
              </p>
            </div>
            <div className='flex space-x-4 p-4'>
              <span className='w-8 h-8 bg-[#FF725E] flex items-center justify-center rounded flex-shrink-0'>
                <BrainIcon className='w-4 h-4' />
              </span>
              <p className='text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae
                quae dicta maxime amet atque molestiae ipsum maiores distinctio debitis veritatis,
                voluptatum sint ratione dolorem tempora, minus architecto labore voluptatem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchPage
