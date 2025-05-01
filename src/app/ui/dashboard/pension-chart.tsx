import React from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import { FinancialData } from './card-wrapper'

export default function PensionChart({
  finances,
}: {
  finances: FinancialData
}) {
  const pieData = [
    { name: 'Pension', value: 50000 },
    { name: 'Investments', value: 23400 },
  ]

  return (
    <div>
      Retirement savings
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
          legendType="square"
        />
        <Legend />
      </PieChart>
    </div>
  )
}
