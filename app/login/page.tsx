import React from 'react'

export default function Login() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <h1>Login</h1>
      <form action="" className="flex flex-col gap-2">
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
          Login
        </button>
      </form>
    </div>
  )
}
