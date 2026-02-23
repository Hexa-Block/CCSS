"use client"

import * as React from "react"
import { useParams, usePathname } from "next/navigation"

import { AppSidebar } from "@/components/app-sidebar"
import { ClientOnly } from "@/components/client-only"
import { DocumentProvider, useDocument } from "@/components/document-provider"
import { getAspectCategoryById, getAspectNameById } from "@/lib/ccss.service"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, InformationCircleIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <DocumentProvider
      documents={[
        {
          name: "CCSS",
          version: "v9.0",
          logo: <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />,
        },
        {
          name: "CCSS",
          version: "v8.1",
          logo: <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />,
        },
      ]}
      defaultVersion="v9.0"
    >
      <SidebarProvider>
        <ClientOnly>
          <AppSidebar />
        </ClientOnly>
        <SidebarInset>
          <DashboardHeader />

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </DocumentProvider>
  )
}

function DashboardHeader() {
  const { activeDocument } = useDocument()
  const pathname = usePathname()
  const params = useParams<{ aspectId?: string }>()
  const aspectId = params?.aspectId ?? null
  const isAbout = pathname?.startsWith("/dashboard/about")
  const aspectCategory = React.useMemo(
    () => (aspectId ? getAspectCategoryById(aspectId) : null),
    [aspectId]
  )
  const aspectName = React.useMemo(
    () => (aspectId ? getAspectNameById(aspectId) : null),
    [aspectId]
  )

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link href="/dashboard">
                  {activeDocument.name} {activeDocument.version}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {aspectId ? (
              <>
                <BreadcrumbSeparator className="hidden md:block" />

                {aspectCategory ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbPage>{aspectCategory}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </>
                ) : null}

                <BreadcrumbItem>
                  <BreadcrumbPage>{aspectId}</BreadcrumbPage>
                </BreadcrumbItem>

                {aspectName ? (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{aspectName}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
              </>
            ) : isAbout ? (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="cursor-pointer" asChild>
            <Link href="/dashboard/about">
              <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
              <span className="sr-only">About</span>
            </Link>
          </Button>
          <ClientOnly>
            <ModeToggle />
          </ClientOnly>
        </div>
      </div>
    </header>
  )
}
