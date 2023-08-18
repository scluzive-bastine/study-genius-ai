import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { userMessages } = body

    // Conversation with the research assistant
    const conversation = [
      {
        role: 'system',
        content: 'You are a research assistant that helps students with their research questions.',
      },
      ...userMessages, // Destructure and include userMessages
    ]

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    })
    // const responseData = {
    //   response: response.data.choices[0].message,
    //   prompt: userMessages,
    // }
    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
