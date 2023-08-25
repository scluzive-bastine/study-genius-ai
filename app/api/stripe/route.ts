import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'
import { stripe } from '@/lib/stripe'
import { absoluteUrl } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

const settingsUrl = absoluteUrl('/settings')

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id

    if (!userId || !session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId: userId,
      },
    })

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      })

      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    //   first time subscribing
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      billing_address_collection: 'auto',
      customer_email: session.user.email,
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: 'Study Group Ai Pro',
              description: 'Unlimited AI Generations',
            },
            unit_amount: 2000,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    })

    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log('[STRIPE_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
