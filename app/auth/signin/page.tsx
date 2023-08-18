import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Login from '@/components/login'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const SignIn = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return <Login />
  }

  redirect('/dashboard')
}

export default SignIn
