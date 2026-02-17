import StatisticCard from "@/components/ui/cards/statistic-cards/statistic-card";
import { columns } from "@/components/standard/columns";
import { DataTable } from "@/components/ui/data-table";
import { getCatalogStats, getRequirements } from "@/lib/ccss.service";
import type { RequirementRow } from "@/types/ccss";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getData(): Promise<RequirementRow[]> {
  const requirements = getRequirements();
  return requirements;
}

export default async function Page() {
  const data = await getData();
  const stats = getCatalogStats();
  return (
    <>
      <StatisticCard stats={stats} />
      <DataTable columns={columns} data={data} />
    </>
  );
}
