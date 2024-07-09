import React from 'react'

export default function Protected() {
  return (
    <div className="bg-amber-500 rounded-md p-2">
      <p>This is a route Protected by JWT token</p>
    </div>
  )
}
