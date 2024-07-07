'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Server Action
export default async function LoginAction(
  currentState: any,
  formData: FormData,
): Promise<string> {
  // get data from form
  const email = formData.get('email')
  const password = formData.get('password')
  // send to our api route
  const res = await fetch(process.env.NEXT_API_URL_PATH + '/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const json = await res.json()
  console.log(json)
  // set the cookie
  cookies().set('Authorization', json.token, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 60 * 1000,
    path: '/',
    sameSite: 'strict',
  })
  // redrect to protected if sucess
  if (res.ok) {
    redirect('/protected')
  } else {
    return json.error
  }
}
