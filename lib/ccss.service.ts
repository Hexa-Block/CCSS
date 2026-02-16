import raw from "@/data/raw/v9.json";
import type { Aspect, CatalogStats, RequirementRow } from "@/types/ccss";

export type AspectListItem = {
  id: string;
  name: string;
};

export function getAspects(): AspectListItem[] {
  const aspects = raw as Aspect[];
  return aspects.map((a) => ({ id: a.aspectId, name: a.aspectName }));
}

export function getAspectNameById(aspectId: string): string | null {
  const aspects = raw as Aspect[];
  const found = aspects.find((a) => a.aspectId === aspectId);
  return found?.aspectName ?? null;
}

export type AspectCategory = "Cryptographic Asset Management" | "Operations";

export function getAspectCategoryById(aspectId: string): AspectCategory | null {
  const normalized = aspectId.trim();
  if (!normalized) return null;

  // Convención CCSS (según vuestro criterio actual):
  // - 1.xx => Cryptographic Asset Management
  // - 2.xx => Operations
  if (normalized.startsWith("1")) return "Cryptographic Asset Management";
  if (normalized.startsWith("2")) return "Operations";

  return null;
}

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

export function getCatalogStats(): CatalogStats {
  const aspects = raw as Aspect[];
  const aspectsCount = aspects.length;
  const controlsCount = aspects.reduce(
    (total, aspect) => total + aspect.controls.length,
    0,
  );
  const requirementsCount = aspects.reduce(
    (total, aspect) =>
      total +
      aspect.controls.reduce(
        (subTotal, control) => subTotal + control.requirements.length,
        0,
      ),
    0,
  );

  return {
    aspects: aspectsCount,
    controls: controlsCount,
    requirements: requirementsCount,
  };
}