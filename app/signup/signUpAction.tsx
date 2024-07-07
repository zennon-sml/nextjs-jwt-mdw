'use server'
import { redirect } from 'next/navigation'

// Server Action
export default async function SignUpAction(
  currentState: any,
  formData: FormData,
): Promise<string> {
  // get data from form
  const email = formData.get('email')
  const password = formData.get('password')
  // send to our api route
  const res = await fetch(process.env.NEXT_API_URL_PATH + '/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const json = await res.json()
  console.log(json)
  // redrect to login if sucess
  if (res.ok) {
    redirect('/login')
  } else {
    return json.error
  }
}
