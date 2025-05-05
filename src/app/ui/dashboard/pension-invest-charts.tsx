import React from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts'
import { FinancialData } from './card-wrapper'

const COLORS = ['#0088FE', '#00C49F']

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function PensionInvestCharts({
  finances,
}: {
  finances: FinancialData
}) {
  const pieData = [
    { name: 'State', value: 50000 },
    { name: 'Private', value: 23400 },
  ]

  return (
    <div className="w-full border-2 border-lime-700 rounded-2xl shadow-xl p-10">
      <div className="flex flex-row justify-between">
        <div>
          <div className="mb-5">
            <h1 className="text-3xl font-bold mb-5 text-lime-700">
              Your investments
            </h1>

            <p className="text-xl">
              Current total of your investments: £
              {Number(finances?.investments).toLocaleString('en-US')}
            </p>
          </div>
          <LineChart
            width={700}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          {/* TO DO what investments */}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-5 text-lime-700">
            Your retirement
          </h1>

          <p className="text-xl">
            Current total in your pension pot: £
            {Number(
              parseInt(finances?.pension) + parseInt(finances?.investments),
            ).toLocaleString('en-US')}
          </p>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={150}
              label
              legendType="square"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  )
}
