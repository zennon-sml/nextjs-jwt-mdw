import React from 'react'

export default function SignUp() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1>SignUp</h1>
      <form action="/login" className="flex flex-col gap-2">
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
