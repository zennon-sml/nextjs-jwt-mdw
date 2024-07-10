import Image from 'next/image'
import React from 'react'

export default function Protected() {
  return (
    <div className="flex flex-col bg-amber-500 rounded-md p-2 items-center">
      <Image
        src={'/gen2starters.png'}
        alt="Gotta Catch'em all"
        width={400}
        height={180}
        blurDataURL="https://i.kym-cdn.com/entries/icons/original/000/028/484/raw.png"
        placeholder="blur"
      />
      <p>
        This is a route Protected by JWT token, and congrats you got them all
      </p>
    </div>
  )
}
