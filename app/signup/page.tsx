'use client'
import React from 'react'
import SignUpAction from './signUpAction'
import { useFormState } from 'react-dom'

export default function SignUp() {
  const [error, formAction] = useFormState(SignUpAction, '')
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1>SignUp</h1>
      <form action={formAction} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="bg-lime-500 rounded-md p-1 placeholder:text-black"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="bg-lime-500 rounded-md p-1 placeholder:text-black"
        />
        <button type="submit" className="bg-lime-500 rounded-md p-2">
          SignUp
        </button>
      </form>
      {error && <p className="bg-lime-500">{error}</p>}
    </div>
  )
}
