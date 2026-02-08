import { Card, CardContent } from "@/components/ui/cards/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { Archive01Icon, FoldersIcon, File02Icon } from "@hugeicons/core-free-icons"

const cards = [
  { icon: Archive01Icon, value: "10", title: "Aspects" },
  { icon: FoldersIcon, value: "39", title: "Controls" },
  { icon: File02Icon, value: "56", title: "Requirements" },
]

export default function StatisticCard() {
  return (
    <section className="@container w-full">
      <div className="grid w-full grid-cols-1 gap-4 @xl:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="group relative overflow-hidden border bg-card text-card-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* shadcn-ish hover sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -top-24 left-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-muted/40 blur-2xl" />
            </div>

            <CardContent className="relative p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </div>
                  <div className="text-3xl font-semibold tracking-tight">
                    {card.value}
                  </div>
                </div>

                <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/20 transition-colors group-hover:bg-muted/30">
                  <HugeiconsIcon
                    icon={card.icon}
                    strokeWidth={2}
                    className="size-5 text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                </div>
              </div>

              {/* accent sutil */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}