import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(request: NextRequest) {
  // Check the cookies
  const cookie = request.cookies.get('Authorization')
  const currentPath = request.nextUrl.pathname

  // If no cookie and the user is not on the login or signup page, redirect to login
  if (!cookie) {
    if (
      !currentPath.startsWith('/login') &&
      !currentPath.startsWith('/signup')
    ) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }

  // Validate the JWT cookie
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
  const jwt = cookie.value

  try {
    const { payload } = await jose.jwtVerify(jwt, secret, {})
    console.log(payload)

    // If the user is already logged in and tries to access login or signup page, redirect to home
    if (currentPath.startsWith('/login') || currentPath.startsWith('/signup')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  } catch (err) {
    // If JWT validation fails, redirect to login
    if (
      !currentPath.startsWith('/login') &&
      !currentPath.startsWith('/signup')
    ) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/protected/:path*', '/login', '/signup'],
}
