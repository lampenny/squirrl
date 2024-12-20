import { Button } from './ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center text-center m-32 pb-10 sm:p-20">
        <div className="flex flex-col w-1/2 items-center justify-center gap-10">
          <div className="md:text-4xl font-bold">
            <Link href="/">Squirrl</Link>
          </div>
          Your personal financial overview. Track your personal finances all in
          one place from everyday budgeting and credit cards to investments and
          pensions.
          <div className="flex flex-row space-x-5">
            <Link href="/login">
              <Button>Log In</Button>
            </Link>
            <Link href="/register">
              <Button> Register </Button>
            </Link>
          </div>
          <p className="text-6xl">🐿️</p>
        </div>
      </div>
    </>
  )
}
