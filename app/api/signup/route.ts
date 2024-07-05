import prisma from '@/app/lib/prisma'
import validateEmail from '../helpers/validateEmail'
import validatePassword from '../helpers/validatePassword'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // get data from form
  const body = await req.json()
  const { email, password } = body
  // validate data
  if (!validateEmail(email) || !validatePassword(password)) {
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 301 },
    )
  }
  // hash the password
  const hash = bcrypt.hashSync(password, 8)
  // create user in DB
  await prisma.user.create({ data: { email, password: hash } })
  console.log('user created')
  return NextResponse.json({}, { status: 200 })
}
