import StatisticCard from "@/components/ui/cards/statistic-cards/statistic-card";
import { columns } from "@/components/standard/columns";
import { DataTable } from "@/components/ui/data-table";
import { getRequirements } from "@/lib/ccss.service";
import { RequirementRow } from "@/types/ccss";

async function getData(): Promise<RequirementRow[]> {
  const requirements = getRequirements();
  return requirements;
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <StatisticCard />
      <DataTable columns={columns} data={data} />
    </>
  );
}
