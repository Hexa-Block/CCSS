"use client"

import * as React from "react"

export type DocumentRef = {
  name: string
  version: string
  logo: React.ReactNode
}

type DocumentContextValue = {
  documents: DocumentRef[]
  activeDocument: DocumentRef
  setActiveDocument: (doc: DocumentRef) => void
}

const DocumentContext = React.createContext<DocumentContextValue | null>(null)

export function DocumentProvider({
  documents,
  defaultVersion,
  children,
}: Readonly<{
  documents: DocumentRef[]
  defaultVersion?: string
  children: React.ReactNode
}>) {
    
  const defaultDoc = React.useMemo(() => {
    return documents.find((d) => d.version === defaultVersion) ?? documents[0]
  }, [documents, defaultVersion])

  if (!defaultDoc) {
    throw new Error("DocumentProvider: documents must not be empty")
  }

  const [activeDocument, setActiveDocument] = React.useState<DocumentRef>(defaultDoc)

  const value = React.useMemo(
    () => ({ documents, activeDocument, setActiveDocument }),
    [documents, activeDocument],
  )

  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>
}

export function useDocument() {
  const ctx = React.useContext(DocumentContext)
  if (!ctx) {
    throw new Error("useDocument must be used within <DocumentProvider>")
  }
  return ctx
}
