'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie' // Make sure to install this library

export default function NavBar() {
  const [isLogedIn, setIsLogedIn] = useState(false)

  const checkAuthToken = () => {
    const authToken = Cookies.get('Authorization')
    setIsLogedIn(!!authToken)
  }

  useEffect(() => {
    // Initial check when the component mounts
    checkAuthToken()

    // Set up an interval to check for token changes
    const interval = setInterval(() => {
      checkAuthToken()
    }, 1000) // Check every second (adjust as needed)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const handleLogout = () => {
    // Remove the token and update state
    Cookies.remove('Authorization')
    setIsLogedIn(false)
  }

  return (
    <div className="fixed top-0 bg-slate-400 p-4 w-full">
      <Link href="/" className="bg-slate-500 rounded-md p-2">
        Home
      </Link>
      {isLogedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link href="/login" className="bg-slate-500 rounded-md p-2">
          Login
        </Link>
      )}
    </div>
  )
}
