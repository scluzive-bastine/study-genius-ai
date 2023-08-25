import { withAuth } from 'next-auth/middleware'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware

export default withAuth({
  secret: process.env.SECRET,
})

export const config = {
  matcher: [
    '/dashboard',
    '/research',
    '/code',
    '/career',
    '/notes',
    '/language',
    '/settings',
    // '/(api|trpc)(.*)',
    '/api/code',
    '/api/langauge',
    '/api/notes',
    '/api/research',
    // '/api/stripe',
    '/api/pdf',
  ],
}
