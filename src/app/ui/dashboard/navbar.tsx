'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:4000/auth/logout')

      if (response.status === 200) {
        router.push('/')
      } else {
        console.log('Logout failed', response)
      }
    } catch (error) {
      console.error('error during logout:', error)
    }
  }

  return (
    <div className="flex justify-between items-center text-white">
      <div className="md:text-2xl font-bold">
        <Link href="/dashboard">Squirrl</Link>
      </div>

      <div className="flex space-x-10 text-sm md:text-base">
        {/* <Link href="/dashboard/settings">Settings</Link> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
