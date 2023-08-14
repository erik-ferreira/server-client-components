import { CountButton } from "./CountButton"
import { Dialog } from "./Dialog"

interface GlobalUserProps {
  user: string
}

export async function GlobalUser({ ...rest }: GlobalUserProps) {
  const response = await fetch(`https://api.github.com/users/${rest.user}`)
  const data = await response.json()

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <CountButton />
      <Dialog />
    </>
  )
}
