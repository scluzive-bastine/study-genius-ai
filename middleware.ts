import { withAuth } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware

export default withAuth({
  secret: process.env.SECRET,
  callbacks: {},
})

export const config = {
  matcher: ['/dashboard', '/research', '/code', '/career', '/notes', '/language', '/settings'],
}