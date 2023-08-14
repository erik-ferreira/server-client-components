"use client"

import { useState } from "react"

export function CountButton({ ...rest }) {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      onClick={() => {
        setCount((prevCount) => prevCount + 1)
      }}
    >
      Increment {count}
    </button>
  )
}
