import { RedirectToSignIn, Show } from "@clerk/react"
import type { ReactNode } from "react"

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return (
    <>
      <Show when="signed-in">
        {children}
      </Show>

      <Show when="signed-out">
        <RedirectToSignIn />
      </Show>
    </>
  )
}

export default ProtectedRoute