import * as React from "react";
import { type Column } from "@tanstack/react-table";

import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, AddCircleIcon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: Readonly<DataTableFacetedFilterProps<TData, TValue>>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);
  const levelDotClass = (value: string) => {
    switch (value) {
      case "Level I":
        return "bg-red-500/80"
      case "Level II":
        return "bg-yellow-500/80"
      case "Level III":
        return "bg-blue-500/80"
      default:
        return "bg-muted-foreground/60"
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed hover:bg-muted/70 dark:hover:bg-muted/70 dark:hover:text-foreground"
        >
          <HugeiconsIcon icon={AddCircleIcon} size={16} />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden gap-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    className="flex w-full items-center gap-2"
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined,
                      );
                    }}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      <div
                        className={cn(
                          "flex size-4 items-center justify-center rounded-[4px] border",
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-input [&_svg]:invisible",
                        )}
                      >
                        <HugeiconsIcon
                          icon={Tick02Icon}
                          className="text-primary-foreground size-3.5"
                        />
                      </div>
                      <span
                        className={cn(
                          "size-2.5 rounded-full",
                          levelDotClass(option.value),
                        )}
                        aria-hidden="true"
                      />
                      <span className="flex-1">
                        {option.label}
                      </span>
                    </div>
                    {facets?.get(option.value) !== undefined && (
                      <span className="text-muted-foreground text-right font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
