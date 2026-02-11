"use client"

import { type Table } from "@tanstack/react-table"
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Cancel01Icon
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { levels } from "../../data/data"
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex flex-1 items-center gap-2">
      <Input
        placeholder="Filter requirements..."
        value={
          (table.getColumn("requirementId")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("requirementId")?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn("level") && (
        <DataTableFacetedFilter
          column={table.getColumn("level")}
          title="Levels"
          options={levels}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => table.resetColumnFilters()}
        >
          Reset
          <HugeiconsIcon icon={Cancel01Icon} className="ml-2" />
        </Button>
      )}
    </div>
  )
}
