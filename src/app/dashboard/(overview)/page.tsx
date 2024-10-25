import { Suspense } from "react";
import { format } from "date-fns";
import CardWrapper from "@/app/ui/dashboard/card-wrapper";
import { CardSkeleton, ChartSkeleton } from "@/app/ui/skeletons";
import SavingsCharts from "@/app/ui/dashboard/savings-charts";
import HeatMap from "@/app/ui/dashboard/heatmap";

export default async function Page() {
  const now = new Date();
  const date = format(now, "EEEE do MMMM");
  const shortDate = format(now, "dd/MM/yyyy");

  return (
    <div>
      <div className="flex flex-row space-x-8 pb-4 place-items-baseline">
        <h1 className="text-2xl">{date}</h1>
        <p className="text-sm text-gray-400">last updated: {shortDate}</p>
      </div>
      <div className="w-full flex flex-row">
        <div className="grid gap-6 grid-cols-2">
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
