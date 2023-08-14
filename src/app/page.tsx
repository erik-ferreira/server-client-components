import { Suspense } from "react"

import { GlobalUser } from "@/components/GlobalUser"
import { DialogProvider } from "@/contexts/DialogContext"

export default function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GlobalUser user="erik-ferreira" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GlobalUser user="clertonf" />
      </Suspense>
    </DialogProvider>
  )
}
