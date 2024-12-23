import { Chart, ReactEChartsProps } from './chart'

const gauge: ReactEChartsProps['option'] = {
  tooltip: {
    formatter: '{a} <br/>{b} : ¥{c}',
  },
  series: [
    {
      name: 'Savings',
      type: 'gauge',
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
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
}

const option: ReactEChartsProps['option'] = {
  series: [
    {
      name: 'Initial deposit',
      label: 'Initial deposit',
      type: 'bar',
      stack: 'initial',
      barWidth: '60%',
      data: [1000],
    },
    {
      name: 'Contributions',
      label: 'Contributions',
      type: 'bar',
      stack: 'initial',
      barWidth: '60%',
      data: [300],
    },
  ],
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%',
  },
  yAxis: {
    type: 'value',
  },
  xAxis: {
    type: 'category',
    data: ['10 years'],
  },
  legend: {
    data: ['Contributions', 'Initial deposit'],
  },
  tooltip: {},
}

export default function SavingsCharts({ value }: { value: string | number }) {
  const date = new Date().getFullYear()

  return (
    <div className="h-fit bg-gray-100 border-2 border-lime-700 rounded-lg p-4">
      <div className="flex flex-row pb-2 text-xl">
        <p>Savings Summary</p>
      </div>
      <div className="flex flex-col xlg:flex-row gap-5 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p>{date} goal:</p>
          <p>{value}</p>

          <Chart option={gauge} style={{ width: '200px', height: '200px' }} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="pb-2">Calculated savings growth</h2>
          <p>1.2% APR</p>
          <Chart option={option} style={{ width: '370px', height: '350px' }} />
        </div>
      </div>
    </div>
  )
}
