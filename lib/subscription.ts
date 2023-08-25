import { getServerSession } from 'next-auth'
import prismadb from './prismadb'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
  const session = await getServerSession(authOptions)
  const userId = session?.user.id

  if (!userId) {
    return false
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!userSubscription) {
    return false
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid
}
