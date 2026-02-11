export type Requirement ={
  requirementId: string;
  level: "Level I" | "Level II" | "Level III";
  requirement: string;
  rationale: string;
}

export type Control = {
  controlId: string;
  controlName: string;
  requirements: Requirement[];
}

export type Aspect = {
  aspectId: string;
  aspectName: string;
  controls: Control[];
}

export type RequirementRow = {
  aspectId: string;
  aspectName: string;
  controlId: string;
  controlName: string;
  requirementId: string;
  level: "Level I" | "Level II" | "Level III";
  requirement: string;
  rationale: string;
}

export type CatalogStats = {
  aspects: number;
  controls: number;
  requirements: number;
}


export type StandardTable = {
  aspectId: string
  aspectName: string
  controlId: string
  controlName: string
  requirementId: string
  requirement: string
  rationale: string
  level: "Level I" | "Level II" | "Level III"
}
