import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src="/catch.png"
        alt="Gotta Catch'em all"
        width={500}
        height={200}
        blurDataURL="https://i.kym-cdn.com/entries/icons/original/000/028/484/raw.png"
        placeholder="blur"
      />
      <h1 className="bg-green-500 rounded-md p-2">
        Homepage, You can access this page without auth, but you can't get them
        all
      </h1>
      <Link href={'/protected'} className="bg-lime-500 rounded-md p-2">
        Protected Route(this one you need auth and you can get them all)
      </Link>
    </div>
  )
}
