"use client"

import * as React from "react"

/**
 * Renderiza children solo en el cliente.
 * Útil para evitar hydration mismatches con librerías que generan IDs dinámicos (Radix UI).
 */
export function ClientOnly({
  children,
  fallback = null,
}: Readonly<{
  children: React.ReactNode
  fallback?: React.ReactNode
}>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return fallback
  return <>{children}</>
}
