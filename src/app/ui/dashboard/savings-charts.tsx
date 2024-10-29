import { CalendarIcon } from "@heroicons/react/24/outline";
import { Chart, ReactEChartsProps } from "./chart";

// const option: ReactEChartsProps["option"] = {
//   dataset: {
//     source: [
//       ["Year", "Initial Deposit", "Contributions", "Interest earned"],
//       ["10 years", 1200, 1330, 120],
//     ],
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow",
//     },
//   },
//   legend: {
//     data: ["Initial Deposit", "Contributions", "Interest earned"],
//     bottom: -5,
//     icon: "circle",
//   },
//   grid: {
//     left: "10%",
//     right: "10%",
//     top: "0%",
//     bottom: "25%",
//   },
//   xAxis: {
//     type: "value",
//   },
//   yAxis: {
//     type: "category",
//   },
//   series: [
//     {
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       itemStyle: {
//         color: "#A7F3D0",
//       },
//     },
//     {
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//     },
//     {
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//     },
//   ],
// };

// const gauge: ReactEChartsProps["option"] = {
//   series: [
//     {
//       type: "gauge",
//       progress: {
//         show: true,
//         width: 18,
//       },
//       axisLine: {
//         lineStyle: {
//           width: 10,
//         },
//       },
//       tooltip: {
//         formatter: "{a} <br/>{b} : {c}%",
//       },
//       axisTick: {
//         show: false,
//       },
//       splitLine: {
//         length: 2,
//         lineStyle: {
//           width: 2,
//           color: "#999",
//         },
//       },
//       axisLabel: {
//         show: false,
//       },
//       anchor: {
//         show: true,
//         showAbove: true,
//         size: 25,
//         itemStyle: {
//           borderWidth: 10,
//         },
//       },
//       title: {
//         show: false,
//       },
//       detail: {
//         valueAnimation: true,
//         fontSize: 20,
//         offsetCenter: [0, "110%"],
//       },
//       max: 1000000,
//       data: [
//         {
//           value: 602000,
//         },
//       ],
//     },
//   ],
// };

const gauge: ReactEChartsProps["option"] = {
  tooltip: {
    formatter: "{a} <br/>{b} : ¥{c}",
  },
  series: [
    {
      name: "Savings",
      type: "gauge",
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
        fontSize: 20,
      },
      max: 500000,
      axisLabel: {
        show: false,
      },
      data: [
        {
          value: 250000,
          // name: "Saved",
        },
      ],
      axisLine: {
        lineStyle: {
          width: 10,
        },
      },
      axisTick: {
        show: false,
      },
      // anchor: {
      //   show: true,
      //   showAbove: true,
      //   size: 10,
      //   itemStyle: {
      //     borderWidth: 10,
      //   },
      // },
      // splitLine: {
      //   length: 2,
      //   lineStyle: {
      //     width: 2,
      //     color: "#999",
      //   },
      // },
    },
  ],
};

const option: ReactEChartsProps["option"] = {
  series: [
    {
      label: "Initial deposit",
      type: "bar",
      stack: "initial",
      barWidth: "60%",
      data: [1000],
    },
    {
      label: "Contributions",
      type: "bar",
      stack: "initial",
      barWidth: "60%",
      data: [300],
    },
  ],
  grid: {
    left: "10%",
    right: "10%",
    top: "10%",
    bottom: "10%",
  },
  yAxis: {
    type: "value",
  },
  xAxis: {
    type: "category",
    data: ["10 years"],
  },
  legend: {
    data: ["Contributions", "Initial deposit"],
  },
  tooltip: {},
};

export default async function SavingsCharts({
  value,
}: {
  value: string | number;
}) {
  const date = new Date().getFullYear();

  return (
    <div className="border h-fit w-full border-green-200 rounded-lg p-4">
      <div className="flex flex-row pb-2 text-xl">
        <p>Savings Summary</p>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p>{date} goal:</p>
          <p>{value}</p>

          <Chart option={gauge} style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="pb-2">Calculated savings growth</h2>
          <p>1.2% APR</p>
          <Chart option={option} style={{ width: "400px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
}
