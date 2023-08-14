"use client"

import { useDialog } from "@/contexts/DialogContext"

export function Dialog() {
  const { open, toggle } = useDialog()

  return (
    <>
      {open && <div className="w-10 h-10 rounded-lg bg-red-500" />}

      <button onClick={toggle}>Toggle</button>
    </>
  )
}
