'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie' // Client-side cookie management library
import { useRouter } from 'next/navigation'

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const authToken = Cookies.get('Authorization')
    setIsLoggedIn(!!authToken) // Convert authToken to a boolean value
  }, [])

  function logOut() {
    Cookies.remove('Authorization')
    setIsLoggedIn(false)
    router.push('/') // Client-side redirection
  }

  return (
    <nav className="fixed w-full p-2 top-0 flex justify-between gap-2">
      <div>
        <Link href="/" className="bg-slate-500 rounded-md p-2">
          Home
        </Link>
      </div>
      {isLoggedIn ? (
        <button onClick={logOut} className="bg-slate-500 rounded-md p-2">
          Logout
        </button>
      ) : (
        <div className="flex gap-2">
          <Link href="/signup" className="bg-slate-500 rounded-md p-2">
            Signup
          </Link>
          <Link href="/login" className="bg-slate-500 rounded-md p-2">
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
