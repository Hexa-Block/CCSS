"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { DocumentSwitcher } from "@/components/document-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, Wallet01Icon, Shield01Icon } from "@hugeicons/core-free-icons"

// This is sample data.
const data = {
  documents: [
    {
      name: "CCSS v9.0 Table",
      logo: (
        <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />
      ),
      version: "v9.0",
    },
    {
      name: "CCSS v8.1 Table.",
      logo: (
        <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />
      ),
      version: "v8.1",
    },
  ],
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
          url: "/dashboard/aspects/1.01",
        },
        {
          title: "1.02 Wallet Generation",
          url: "/dashboard/aspects/1.02",
        },
        {
          title: "1.03 Key Material Storage",
          url: "#",
        },
        {
          title: "1.04 Key Material Access",
          url: "#",
        },
        {
          title: "1.05 Key Material Usage",
          url: "#",
        },
        {
          title: "1.06 Data Sanitization Documentation",
          url: "#",
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
          url: "/dashboard/aspects/2.01",
        },
        {
          title: "2.02 Log and Monitor",
          url: "/dashboard/aspects/2.02",
        },
        {
          title: "2.03 Governance and Risk",
          url: "/dashboard/aspects/2.03",
        },
        {
          title: "2.04 Key Compromise Documentation",
          url: "/dashboard/aspects/2.04",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <DocumentSwitcher documents={data.documents} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
