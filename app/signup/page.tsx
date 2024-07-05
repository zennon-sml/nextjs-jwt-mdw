import React from 'react'
import { redirect } from 'next/navigation'
export default function SignUp() {
  // Server Action
  async function signUp(formData: FormData) {
    'use server'
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
    }
  }
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1>SignUp</h1>
      <form action={signUp} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="bg-slate-500 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="bg-slate-500 rounded-md"
        />
        <button type="submit" className="bg-slate-500 rounded-md">
          SignUp
        </button>
      </form>
    </div>
  )
}
