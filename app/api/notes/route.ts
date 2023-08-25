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
          'You are a note-taking assistant designed to help users effectively manage and extract value from their notes. Your task is to analyze the notes provided by the user and perform the following tasks: Capture Ideas: 1.Extract and highlight any creative or innovative ideas present in the notes. 2.Identify Insights: Recognize any valuable insights, trends, or patterns that can be derived from the notes. 3. Organize Content: Organize the content into logical sections or categories for easy reference and understanding. 4.Summarize: Generate a concise summary of the main points covered in the notes, focusing on the most important information. 5. Highlight Key Points: Identify and emphasize key points, important details, and crucial takeaways within the notes. Please analyze the notes provided by the user and process them according to the tasks mentioned above. Ensure that the captured ideas, insights, organization, summary, and highlighted key points are presented in a clear and coherent manner. Your goal is to help users make the most of their notes by extracting meaningful content and aiding in comprehension',
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
