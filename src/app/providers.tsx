'use client'

import React, { createContext, useState } from 'react'

export const CurrentUserContext = createContext<{
  currentUser: any
  setCurrentUser: (user: any) => void
}>({
  currentUser: null,
  setCurrentUser: () => {},
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
