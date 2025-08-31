'use client'
import { createContext, useState, ReactNode } from 'react'

interface PageContextType {
  pageTitle: string
  setPageTitle: (title: string) => void
  showBackArrow: boolean
  setShowBackArrow: (show: boolean) => void
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export function PageProvider({ children }: { children: ReactNode }) {
  const [pageTitle, setPageTitle] = useState("")
  const [showBackArrow, setShowBackArrow] = useState(false)

  return (
    <PageContext.Provider value={{ pageTitle, setPageTitle, showBackArrow, setShowBackArrow }}>
      {children}
    </PageContext.Provider>
  )
}
