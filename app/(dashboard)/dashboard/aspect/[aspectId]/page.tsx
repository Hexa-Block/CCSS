import type { Metadata } from "next";
import StatisticCard from "@/components/ui/cards/statistic-cards/statistic-card";
import { columns } from "@/components/standard/columns";
import { DataTable } from "@/components/ui/data-table";
import { getRequirements } from "@/lib/ccss.service";
import type { CatalogStats, RequirementRow } from "@/types/ccss";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

type RouteParams = { aspectId: string }

type PageProps = { params: Promise<RouteParams> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { aspectId } = await params;
  return {
    alternates: {
      canonical: `https://ccssnavigator.com/dashboard/aspect/${encodeURIComponent(aspectId)}`,
    },
  };
}

async function getData(params: RouteParams): Promise<RequirementRow[]> {
  return getRequirements({ aspectId: params.aspectId });
}

function getStats(data: RequirementRow[]): CatalogStats {
  return {
    aspects: new Set(data.map((row) => row.aspectId)).size,
    controls: new Set(data.map((row) => row.controlId)).size,
    requirements: data.length,
  };
}

export default async function Page({ params }: PageProps) {
  const routeParams = await params;
  const data = await getData(routeParams);
  const stats = getStats(data);
  return (
    <>
      <StatisticCard stats={stats} />
      <DataTable columns={columns} data={data} />
    </>
  );
}
