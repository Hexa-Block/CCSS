"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import posthog from "posthog-js"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  CookieIcon,
  Settings02Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { ClientOnly } from "@/components/client-only"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function AnalyticsConsent() {
  if (
    !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
    !process.env.NEXT_PUBLIC_POSTHOG_HOST
  ) {
    return null
  }

  return (
    <ClientOnly>
      <ConsentControls />
    </ClientOnly>
  )
}

function ConsentControls() {
  const [status, setStatus] = useState(() => posthog.get_explicit_consent_status())
  const [editing, setEditing] = useState(false)
  const [view, setView] = useState<"summary" | "preferences">("summary")
  const [analyticsEnabled, setAnalyticsEnabled] = useState(status === "granted")
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const settingsButton = useRef<HTMLButtonElement>(null)
  const showBanner = status === "pending" || editing
  const settingsLabel = `Analytics preferences: ${status === "pending" ? "no choice yet" : status === "granted" ? "cookies accepted" : "cookies rejected"}`
  const choiceButtonClasses =
    "flex-1 cursor-pointer hover:border-foreground/40 hover:ring-2 hover:ring-ring/30 data-[variant=outline]:hover:bg-foreground/10 dark:data-[variant=outline]:hover:bg-foreground/15"

  function choose(accepted: boolean) {
    if (accepted) {
      posthog.opt_in_capturing()
    } else {
      posthog.opt_out_capturing()
    }

    setStatus(posthog.get_explicit_consent_status())
    setAnalyticsEnabled(accepted)
    setEditing(false)
    settingsButton.current?.focus()
  }

  function openPreferences() {
    setAnalyticsEnabled(status === "granted")
    setView("preferences")
    setEditing(true)
  }

  function closePreferences() {
    setEditing(false)
    settingsButton.current?.focus()
  }

  return (
    <div className="ph-no-capture">
      <Tooltip open={!showBanner && tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild onFocus={(event) => event.preventDefault()}>
          <Button
            ref={settingsButton}
            variant="outline"
            size="icon"
            className="fixed bottom-5 right-5 z-40 size-9 cursor-pointer rounded-full bg-popover text-popover-foreground shadow-md dark:bg-popover hover:border-foreground/40 hover:bg-accent hover:ring-2 hover:ring-ring/30 dark:hover:bg-accent"
            aria-label={settingsLabel}
            aria-expanded={showBanner}
            aria-controls="analytics-consent"
            onClick={openPreferences}
          >
            <HugeiconsIcon icon={CookieIcon} className="size-5" aria-hidden="true" />
            {status !== "pending" && (
              <span className="absolute -right-1 -top-1 flex size-3.5 items-center justify-center rounded-sm bg-popover text-popover-foreground transition-colors group-hover/button:bg-accent" aria-hidden="true">
                <HugeiconsIcon
                  icon={status === "granted" ? Tick02Icon : Cancel01Icon}
                  className="size-3"
                  strokeWidth={2.5}
                />
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8} className="ph-no-capture">
          {settingsLabel}
        </TooltipContent>
      </Tooltip>

      {showBanner && (
        <section
          id="analytics-consent"
          aria-labelledby="analytics-consent-title"
          className="fixed inset-x-5 bottom-[4.25rem] z-50 mx-auto max-h-[calc(100dvh-5.5rem)] max-w-xl overflow-y-auto rounded-xl border bg-popover p-4 text-popover-foreground shadow-lg ring-1 ring-foreground/5 sm:inset-x-auto sm:right-5 sm:w-[32rem]"
        >
          {view === "summary" ? (
            <>
              <h2 id="analytics-consent-title" className="text-sm font-semibold">
                This website uses cookies
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We use optional analytics cookies to understand and improve CCSS Navigator.
              </p>
              <div className="mt-4 grid grid-cols-[1fr_1fr_auto] gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className={choiceButtonClasses}
                  onClick={() => choose(false)}
                >
                  Reject cookies
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={choiceButtonClasses}
                  onClick={() => choose(true)}
                >
                  Accept cookies
                </Button>
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="cursor-pointer hover:border-foreground/40 hover:ring-2 hover:ring-ring/30"
                  aria-label="Manage preferences"
                  title="Manage preferences"
                  onClick={() => setView("preferences")}
                >
                  <HugeiconsIcon icon={Settings02Icon} aria-hidden="true" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 id="analytics-consent-title" className="text-sm font-semibold">
                Manage your privacy preferences
              </h2>
              <div className="mt-4 divide-y rounded-lg border">
                <div className="flex items-start justify-between gap-4 p-3">
                  <div>
                    <label htmlFor="necessary-storage" className="text-sm font-medium">
                      Necessary storage
                    </label>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Remembers your privacy choice and requested site preferences.
                    </p>
                  </div>
                  <Switch id="necessary-storage" checked disabled aria-label="Necessary storage, always active" />
                </div>
                <div className="flex items-start justify-between gap-4 p-3">
                  <div>
                    <label htmlFor="analytics-cookies" className="text-sm font-medium">
                      Analytics cookies
                    </label>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Recognise returning visits and provide more detailed analytics.
                      General cookieless measurement remains active when this is off.
                    </p>
                  </div>
                  <Switch
                    id="analytics-cookies"
                    checked={analyticsEnabled}
                    onCheckedChange={setAnalyticsEnabled}
                    aria-label="Allow analytics cookies"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="lg" className="cursor-pointer" onClick={() => choose(analyticsEnabled)}>
                  Save preferences
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="cursor-pointer"
                  onClick={status === "pending" ? () => setView("summary") : closePreferences}
                >
                  {status === "pending" ? "Back" : "Close"}
                </Button>
              </div>
            </>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Privacy and cookies
            </Link>
          </p>
        </section>
      )}
    </div>
  )
}
