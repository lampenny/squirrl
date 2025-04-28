'use client'

import Link from 'next/link'
import { Button } from './ui/button'

export default function Landing() {
  return (
    <div className="items-center justify-items-center text-center m-32 pb-10 sm:p-20">
      <div className="flex flex-col md:w-1/2 items-center justify-center gap-10">
        <div className="md:text-4xl font-bold text-lime-700">
          <p className="text-6xl">🐿️</p>
          Squirrl
        </div>
        Track your personal finances all in one place from everyday budgeting to
        investments.
        <div className="flex flex-row space-x-5">
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
          <Link href="/register">
            <Button> Register </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
