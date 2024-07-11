import Image from 'next/image'
import React from 'react'

export default function Protected() {
  return (
    <div className="flex flex-col bg-amber-500 rounded-md p-2 items-center">
      <Image
        src="/jwt.png"
        alt="Gotta Catch'em all"
        width={280}
        height={280}
        blurDataURL="https://i.kym-cdn.com/entries/icons/original/000/028/484/raw.png"
        placeholder="blur"
      />
      <p>This is a route Protected by JWT token</p>
    </div>
  )
}
