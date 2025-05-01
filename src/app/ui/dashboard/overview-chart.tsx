import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts'
import { format } from 'date-fns'
import { FinancialData } from './card-wrapper'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function OverviewChart({
  finances,
}: {
  finances: FinancialData
}) {
  const now = new Date()
  const month = format(now, 'MMMM')
  if (!finances) return

  const pieData = [
    {
      name: 'Expenses',
      value:
        parseInt(finances.expenses) + parseInt(finances.credit_card_balance) ||
        0,
    },
    { name: 'Income', value: parseInt(finances.income) || 0 },
    { name: 'Investments', value: parseInt(finances.investments) || 0 },
  ]

  return (
    <div>
      Overview of {month}
      <PieChart width={500} height={350}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
