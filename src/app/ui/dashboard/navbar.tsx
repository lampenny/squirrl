'use client'

import { CurrentUserContext } from '@/app/providers'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function Navbar() {
  const router = useRouter()
  const { setCurrentUser } = useContext(CurrentUserContext)

  const handleLogout = () => {
    router.push('/')
    setCurrentUser(null)
  }

  return (
    <div className="flex justify-between items-center text-white">
      <div className="md:text-2xl font-bold">
        <Link href="/dashboard">Squirrl</Link>
      </div>

      <div className="flex space-x-10 text-sm md:text-base">
        <Link href="/dashboard/settings">Settings</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
