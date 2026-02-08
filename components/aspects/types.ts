export type CCSSLevel = "I" | "II" | "III"

export type controlRequirement = {
  id: string
  level: CCSSLevel
  requirement: string
  rationale?: string
}

export type AspectControl = {
  id: string
  name: string
  requirements: controlRequirement[]
}

export type Aspect = {
  id: string
  name: string
  aspectObjective: string
  controls: AspectControl[]
}
