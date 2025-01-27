import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src="/jwtbw.png"
        alt="Gotta Catch'em all"
        width={280}
        height={280}
        blurDataURL="/jwt.png"
        placeholder="blur"
      />
      <h1 className="bg-green-500 rounded-md p-2">
        Homepage, You can access this page without auth
      </h1>
      <Link href={'/protected'} className="bg-lime-500 rounded-md p-2">
        Protected Route
      </Link>
    </div>
  )
}
