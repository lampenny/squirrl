'use client'

import React, { useEffect, createContext, useState } from 'react'
import { FinancialData } from './ui/dashboard/card-wrapper'

export const CurrentUserContext = createContext<{
  currentUser: any
  setCurrentUser: (user: any) => void
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
  const currentUser = sessionStorage.getItem('currentUser')
  return currentUser ? JSON.parse(currentUser) : null
}
const getInitialStateFinances = () => {
  const currentFinances = sessionStorage.getItem('finances')
  return currentFinances ? JSON.parse(currentFinances) : null
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(getInitialState)
  const [finances, setFinances] = useState(getInitialStateFinances)

  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    sessionStorage.setItem('finances', JSON.stringify(finances))
  }, [currentUser, finances])

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <FinancesContext.Provider value={{ finances, setFinances }}>
        {children}
      </FinancesContext.Provider>
    </CurrentUserContext.Provider>
  )
}
