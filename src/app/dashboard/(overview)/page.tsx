import { Suspense } from "react";
import { format } from "date-fns";
import CardWrapper from "@/app/ui/dashboard/card-wrapper";
import { CardSkeleton, ChartSkeleton } from "@/app/ui/skeletons";
import SavingsCharts from "@/app/ui/dashboard/savings-charts";
import PensionChart from "@/app/ui/dashboard/pension-chart";

export default async function Page() {
  const now = new Date();
  const date = format(now, "EEEE do MMMM");
  const shortDate = format(now, "dd/MM/yyyy");

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col md:flex-row md:gap-8 pb-10 place-items-baseline">
        <h1 className="text-2xl">{date}</h1>
        <p className="text-sm text-gray-400">last updated: {shortDate}</p>
      </div>
      <div className="flex flex-row">
        <div>
          <Suspense fallback={<CardSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>

        <div className="hidden md:flex flex-col pl-5 space-y-2">
          <Suspense fallback={<ChartSkeleton />}>
            <SavingsCharts value="¥500,000" />
          </Suspense>

          <Suspense fallback={<ChartSkeleton />}>
            <PensionChart value="value" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
