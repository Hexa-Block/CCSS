"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"
import type { StandardTable } from "@/types/ccss"

const levelBadgeClass: Record<StandardTable["level"], string> = {
  "Level I":
    "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300 dark:border-red-500/40",
  "Level II":
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-800 dark:text-yellow-300 dark:border-yellow-500/40",
  "Level III":
    "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300 dark:border-blue-500/40",
}

export const columns: ColumnDef<StandardTable>[] = [
  
  { accessorKey: "aspectId", header: "Aspect ID" },
  { accessorKey: "aspectName", header: "Aspect Name" },
  { accessorKey: "controlId", header: "Control ID" },
  { accessorKey: "controlName", header: "Control Name" },
  { accessorKey: "requirementId", header: "Requirement ID" },
  {
    accessorKey: "requirement",
    header: "Requirement",
    cell: ({ row }) => {
      const { requirement, rationale, requirementId } = row.original

      return (
        <div className="flex items-center gap-2">
          <span className="min-w-0 flex-1 whitespace-normal break-words">
            {requirement}
          </span>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted/40 hover:text-foreground"
                aria-label={`Show rationale for ${requirementId}`}
              >
                <HugeiconsIcon icon={InformationCircleIcon} size={16} />
              </button>
            </TooltipTrigger>

            <TooltipContent className="max-w-xs">
              <p className="whitespace-pre-line text-sm leading-relaxed">
                <span className="font-medium">Rationale:</span> {rationale}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      )
    },
  },
  {
    accessorKey: "level",
    header: "Level",
    filterFn: (row, id, value) => {
      const selected = value as string[] | undefined
      if (!selected?.length) return true

      const raw = row.getValue(id)
      if (typeof raw !== "string") return false

      return selected.includes(raw)
    },
    cell: ({ row }) => {
      const level = row.getValue("level")
      if (typeof level !== "string") return null
      const levelValue = level as StandardTable["level"]

      return (
        <Badge
          variant="outline"
          className={`whitespace-nowrap text-xs ${levelBadgeClass[levelValue]}`}
        >
          {levelValue}
        </Badge>
      )
    },
  },
]