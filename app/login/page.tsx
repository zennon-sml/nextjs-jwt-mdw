'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import LoginAction from './loginAction'

export default function Login() {
  const [error, formAction] = useFormState(LoginAction, '')
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1>Login</h1>
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
          Login
        </button>
      </form>
      {error && <p className="bg-lime-500">{error}</p>}
    </div>
  )
}
