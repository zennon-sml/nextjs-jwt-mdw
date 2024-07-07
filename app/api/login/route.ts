import { NextResponse } from 'next/server'
import validateEmail from '../helpers/validateEmail'
import validatePassword from '../helpers/validatePassword'
import prisma from '@/app/lib/prisma'
import bcrypt from 'bcryptjs'
import * as jose from 'jose'

export async function POST(request: Request) {
  // Extract data sent
  const body = await request.json()
  const { email, password } = body
  // Validate data
  if (!validateEmail(email) || !validatePassword(password)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 301 })
  }
  // Verify the user
  const user = await prisma.user.findFirst({
    where: { email },
  })
  if (!user) {
    return NextResponse.json({ error: 'User not registed' }, { status: 301 })
  }
  // Compare passowrd
  const isCorrectPassWord = bcrypt.compareSync(password, user.password)
  if (!isCorrectPassWord) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 301 })
  }
  // Create JWT token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
  const alg = 'HS256'

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setIssuedAt()
    // .setIssuer('urn:example:issuer')
    // .setAudience('urn:example:audience')
    .setExpirationTime('1 minute')
    .setSubject(user.email.toString())
    .sign(secret)
  // Response JWT
  return NextResponse.json({ token: jwt })
}
