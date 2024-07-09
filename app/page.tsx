import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Homepage, You can access this page without auth</h1>
      <Link href={'/protected'} className="bg-slate-500 rounded-md p-2 mt-2">
        Protected Route(this one you need auth)
      </Link>
    </div>
  )
}
