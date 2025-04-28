'use client'

import React, { useEffect, createContext, useState } from 'react'
import { FinancialData } from './ui/dashboard/card-wrapper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface User {
  user_id: number
  name: string
  email: string
}

export const CurrentUserContext = createContext<{
  currentUser: User | null
  setCurrentUser: (user: User) => void
}>({
  currentUser: null,
  setCurrentUser: () => {},
})

export const FinancesContext = createContext<{
  finances: FinancialData | null
  setFinances: any
}>({
  finances: null,
  setFinances: null,
})

const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const currentUser = sessionStorage.getItem('currentUser')
    return currentUser ? JSON.parse(currentUser) : null
  }

  return null
}

const getInitialStateFinances = () => {
  if (typeof window !== 'undefined') {
    const currentFinances = sessionStorage.getItem('finances')
    return currentFinances ? JSON.parse(currentFinances) : null
  }

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(getInitialState)
  const [finances, setFinances] = useState(getInitialStateFinances)
  const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    sessionStorage.setItem('finances', JSON.stringify(finances))
  }, [currentUser, finances])

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <FinancesContext.Provider value={{ finances, setFinances }}>
          {children}
        </FinancesContext.Provider>
      </CurrentUserContext.Provider>
    </QueryClientProvider>
  )
}
