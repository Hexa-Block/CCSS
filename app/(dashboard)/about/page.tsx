import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SecurityCheckIcon,
  CompassIcon,
  Database01Icon,
  CodeIcon,
  GithubIcon,
  ArrowUpRight01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Globe02Icon,
  UserIcon,
  Building03Icon,
  Certificate01Icon,
} from "@hugeicons/core-free-icons"

import { Card, CardContent } from "@/components/ui/cards/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
}

const sections: {
  icon: typeof SecurityCheckIcon
  title: string
  body: React.ReactNode
}[] = [
  {
    icon: Building03Icon,
    title: "C4",
    body: (
      <>
        <p>
          The CryptoCurrency Certification Consortium (C4) is a non-profit organization dedicated to providing unbiased education and certifications in cryptocurrency. Our mission is to help users, from beginners to seasoned professionals, understand and operate within the blockchain space securely and competently. Our certifications and the CryptoCurrency Security Standard (CCSS) empower individuals and companies alike to build trust and operate safely.
        </p>
        <Button variant="outline" size="sm" className="mt-3" asChild>
          <a
            href="https://cryptoconsortium.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cryptoconsortium.org
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              className="ml-1.5"
            />
          </a>
        </Button>
      </>
    ),
  },
  {
    icon: SecurityCheckIcon,
    title: "What is CCSS?",
    body: (
      <>
        <p>
CryptoCurrency Security Standard (CCSS) is a set of requirements for all information systems that make use of cryptocurrencies, including exchanges, web applications, and cryptocurrency storage solutions. By standardizing the techniques and methodologies used by systems around the globe, end-users will be able to easily make educated decisions about which products and services to use and with which companies they wish to align.
        </p>

        <Button variant="outline" size="sm" className="mt-3" asChild>
          <a
            href="https://cryptoconsortium.org/standards-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              className="ml-1.5"
            />
          </a>
        </Button>
      </>
    ),
  },
  {
    icon: Certificate01Icon,
    title: "CCSS Certification",
    body: (
      <>
        <p>
          Organizations can achieve CCSS certification at three levels — <strong>Level I</strong>, <strong>Level II</strong>, and <strong>Level III</strong> — each representing increasing security maturity. Certification is granted by C4-authorized auditors who verify compliance across all security aspects.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://cryptoconsortium.org/auditors-table/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find an auditor
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={14}
                className="ml-1.5"
              />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://cryptoconsortium.org/completed-ccss-audits/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certified systems
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={14}
                className="ml-1.5"
              />
            </a>
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: CompassIcon,
    title: "About this project",
    body: (
      <>
        <p>
          An open-source, community-maintained dashboard that makes CCSS easier
          to browse, search, and filter across versions.
        </p>
        <p className="mt-2 text-muted-foreground">
          <strong>Disclaimer:</strong> This is not an official source of truth.
          Always validate against official CCSS references published by C4.
        </p>
      </>
    ),
  },
  {
    icon: Database01Icon,
    title: "Data sources",
    body: (
      <p>
        Datasets are static JSON files under{" "}
        <code className="rounded bg-muted-foreground/30 px-1 py-0.5 text-[0.625rem] font-mono">
          data/raw/
        </code>
        . Spot a mismatch? Open an issue or submit a PR with a reference.
      </p>
    ),
  },
  {
    icon: CodeIcon,
    title: "Tech stack",
    body: (
      <div className="flex flex-wrap gap-1.5">
        {["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix"].map(
          (t) => (
            <Badge key={t} variant="secondary" className="bg-muted-foreground/30">
              {t}
            </Badge>
          ),
        )}
      </div>
    ),
  },
  {
    icon: GithubIcon,
    title: "Contribute",
    body: (
      <>
        <p>
          Contributions are welcome — especially improvements to datasets,
          structure, and UX that help people navigate CCSS across versions.
        </p>
        <Button variant="outline" size="sm" className="mt-3" asChild>
          <a
            href="https://github.com/Hexa-Block/CCSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon icon={GithubIcon} size={14} className="mr-1.5" />
            GitHub Repository
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              className="ml-1.5"
            />
          </a>
        </Button>
      </>
    ),
  },
  {
    icon: UserIcon,
    title: "Author",
    body: (
      <>
        <p>
          Created and maintained by <a href="https://hexablock.io/about" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">Pedro Frias</a> (HexaBlock).
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/pedro-frias-favero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={14} className="mr-1.5" />
              LinkedIn
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} className="ml-1.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/Pfriasf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon icon={GithubIcon} size={14} className="mr-1.5" />
              GitHub
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} className="ml-1.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://hexablock.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon icon={Globe02Icon} size={14} className="mr-1.5" />
              hexablock.io
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} className="ml-1.5" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:pedro@hexablock.io">
              <HugeiconsIcon icon={Mail01Icon} size={14} className="mr-1.5" />
              Email
            </a>
          </Button>
        </div>
      </>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/20">
          <HugeiconsIcon
            icon={CompassIcon}
            strokeWidth={2}
            className="size-4.5 text-muted-foreground"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold tracking-tight">
            CCSS Navigator
          </h1>
          <p className="text-xs text-muted-foreground">
            A community tool to explore the CryptoCurrency Security Standard.
          </p>
        </div>
      </div>

      <section className="@container w-full">
        <div className="grid grid-cols-1 gap-4 @xl:grid-cols-2">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="group relative overflow-hidden border bg-card text-card-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-24 left-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-muted/40 blur-2xl" />
              </div>

              <CardContent className="relative p-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-muted/20 transition-colors group-hover:bg-muted/30">
                    <HugeiconsIcon
                      icon={section.icon}
                      strokeWidth={2}
                      className="size-5 text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="text-sm font-medium text-muted-foreground">{section.title}</div>
                    <div className="text-sm leading-relaxed">
                      {section.body}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


    </>
  )
}
