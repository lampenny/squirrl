import { CalendarIcon } from "@heroicons/react/24/outline";
import { Chart, ReactEChartsProps } from "./chart";

const option: ReactEChartsProps["option"] = {
  series: [
    {
      name: "Contributions",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 130, 140, 150, 160, 170, 210, 240, 250, 260],
    },
    {
      name: "Compound Growth",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [125, 135, 142, 155, 165, 172, 220, 260, 280, 300],
    },
  ],
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  yAxis: {
    type: "value",
  },
  xAxis: {
    type: "category",
    data: ["20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],
    boundaryGap: false,
  },
  legend: {
    data: ["Contributions", "Compound Growth"],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
};

export default async function PensionChart({
  value,
}: {
  value: string | number;
}) {
  const date = new Date().getFullYear();

  return (
    <div className="border h-fit w-full border-yellow-200 rounded-lg p-4">
      <div className="flex flex-row pb-2 text-xl">
        <p>Pension Summary</p>
      </div>
      <div className="flex flex-col space-y-5 items-center justify-center">
        <p>Private</p>
        <div>
          <Chart option={option} style={{ width: "500px", height: "200px" }} />
        </div>

        <p>State</p>
        <div>
          <Chart option={option} style={{ width: "500px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
}
