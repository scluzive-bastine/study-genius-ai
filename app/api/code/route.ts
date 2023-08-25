import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'
import { authOptions } from '../auth/[...nextauth]/route'
import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userMessages } = body
    const session = await getServerSession(authOptions)
    const userId = session?.user.id

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API key not configured', { status: 500 })
    }

    if (!userMessages) {
      return new NextResponse('Messages are required', { status: 400 })
    }

    // checking if trial has exhausted
    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse('Free trial has expired', { status: 403 })
    }

    // Conversation with the research assistant
    const conversation = [
      {
        role: 'system',
        content:
          'You are a code generator. You must answer only in markdown code snippets. Always code comments for explanations',
      },
      ...userMessages, // Destructure and include userMessages
    ]

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    })

    if (!isPro) {
      await increaseApiLimit()
    }

    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
