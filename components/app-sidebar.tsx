"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { DocumentSwitcher } from "@/components/document-switcher"
import { useDocument } from "@/components/document-provider"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Wallet01Icon, Shield01Icon, InformationCircleIcon, DashboardSquare01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Cryptographic Asset Management",
      url: "#",
      icon: (
        <HugeiconsIcon icon={Wallet01Icon} strokeWidth={2} />
      ),
      isActive: true,
      items: [
        {
          title: "1.01 Key Material Generation",
          url: "/dashboard/aspect/1.01",
        },
        {
          title: "1.02 Wallet Generation",
          url: "/dashboard/aspect/1.02",
        },
        {
          title: "1.03 Key Material Storage",
          url: "/dashboard/aspect/1.03",
        },
        {
          title: "1.04 Key Material Access",
          url: "/dashboard/aspect/1.04",
        },
        {
          title: "1.05 Key Material Usage",
          url: "/dashboard/aspect/1.05",
        },
        {
          title: "1.06 Data Sanitization Documentation",
          url: "/dashboard/aspect/1.06",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      icon: (
        <HugeiconsIcon icon={Shield01Icon} strokeWidth={2} />
      ),
      items: [
        {
          title: "2.01 Security Tests/ Audits",
          url: "/dashboard/aspect/2.01",
        },
        {
          title: "2.02 Log and Monitor",
          url: "/dashboard/aspect/2.02",
        },
        {
          title: "2.03 Governance and Risk",
          url: "/dashboard/aspect/2.03",
        },
        {
          title: "2.04 Key Compromise Documentation",
          url: "/dashboard/aspect/2.04",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { documents } = useDocument()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <DocumentSwitcher documents={documents} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <Link href="/dashboard">
                  <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <NavMain items={data.navMain} />
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="About">
                <Link href="/about">
                  <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
                  <span>About</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
