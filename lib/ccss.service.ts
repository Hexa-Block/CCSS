import raw from "@/data/raw/v9.json";
import type { Aspect, RequirementRow } from "@/types/ccss";

export function getRequirements(filters?: {
  level?: RequirementRow["level"];
  aspectId?: string;
  controlId?: string;
}) {
  const aspects = raw as Aspect[];

  let rows: RequirementRow[] = aspects.flatMap(aspect =>
    aspect.controls.flatMap(control =>
      control.requirements.map(
        (req): RequirementRow => ({
          aspectId: aspect.aspectId,
          aspectName: aspect.aspectName,
          controlId: control.controlId,
          controlName: control.controlName,
          requirementId: req.requirementId,
          level: req.level,
          requirement: req.requirement,
          rationale: req.rationale,
        }),
      ),
    ),
  );

  if (filters?.level) rows = rows.filter(r => r.level === filters.level);
  if (filters?.aspectId) rows = rows.filter(r => r.aspectId === filters.aspectId);
  if (filters?.controlId) rows = rows.filter(r => r.controlId === filters.controlId);

  return rows;
}