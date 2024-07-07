import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className="fixed top-0 bg-slate-400 p-4 w-full">
      <Link href={'/'} className="bg-slate-500 rounded-md p-2">Home</Link>
    </div>
  )
}
