import { ReactNode } from "react"

function MaxWidthWrapper({ children }: {children: ReactNode}) {
  return (
    <div className="w-full max-w-6xl m-auto px-6 md:px-12">{children}</div>
  )
}

export default MaxWidthWrapper