'use client'

import { useContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

import { Button } from '../button'
import { CurrentUserContext } from '@/app/providers'

export default function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext)
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      axios.post('http://localhost:4000/auth/login', credentials, {
        withCredentials: true,
      }),
    onError: (error) => {
      console.log('error', error)
    },
    onSuccess: ({ data }) => {
      setCurrentUser(data.user)

      router.push('/dashboard')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login.mutate({ email, password })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container space-y-3 w-auto">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className="mb-3 text-2xl">Log in to continue.</h1>
          <div className="w-full">
            {login.isError && (
              <p className="text-red-500 text-xs">Invalid email or password.</p>
            )}
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={3}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button disabled={login.isPending}>
              Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
          </div>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </div>
      </form>
    </div>
  )
}
