'use server'
import { cookies } from 'next/headers'

export default async function deleteCookie() {
  return cookies().delete('Authorization')
}
