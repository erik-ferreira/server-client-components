"use client"

import { ReactNode, createContext, useContext, useState } from "react"

interface DialogContextType {
  open: boolean
  toggle: () => void
}

const DialogContext = createContext({} as DialogContextType)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((state) => !state)
  }

  return (
    <DialogContext.Provider value={{ open, toggle }}>
      {children}
    </DialogContext.Provider>
  )
}

export function useDialog() {
  const context = useContext(DialogContext)

  return context
}
