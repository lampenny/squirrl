import React from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts'
import { format } from 'date-fns'
import { FinancialData } from './card-wrapper'
import {
  BanknotesIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

// TO DO Rating of spending - if you've set your budget to be 30% of your
// monthly income the chart will give you a friendly rating

const COLORS = ['#00C49F', '#e7000b', '#FFBB28', '#FF8042']

export default function OverviewChart({
  finances,
}: {
  finances: FinancialData
}) {
  if (!finances) return

  const pieData = [
    { name: 'Income', value: parseInt(finances.income) || 0 },
    {
      name: 'Expenses',
      value:
        parseInt(finances.expenses) + parseInt(finances.credit_card_balance) ||
        0,
    },
    { name: 'Investments', value: 1500 },
  ]
  const remaining = (parseInt(finances.expenses) + 1500) / 4500

  return (
    <div className="w-full border-2 border-lime-700 rounded-2xl shadow-xl p-10">
      <h1 className="text-3xl font-bold mb-5 text-lime-700">
        Your spending trends for this month
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col text-2xl gap-y-5">
          <p className="flex flex-row text-red-600 items-center gap-x-2">
            <ArrowTrendingUpIcon className="w-8" /> 39% increase in expenses
          </p>
          <p className="flex flex-row text-amber-400 items-center gap-x-2">
            <ArrowTrendingDownIcon className="w-8" />
            11% decrease in investments
          </p>
          <p className="flex flex-row text-lime-600 items-center gap-x-4">
            <BanknotesIcon className="w-8" /> As of today you have{' '}
            {Math.floor(remaining * 100)}% left of your income to spend
          </p>

          <p className="flex flex-row text-cyan-500 items-center gap-x-4">
            <CheckCircleIcon className="w-10" /> You are on track to achieve
            your investment goal for this month
          </p>

          <p className="flex flex-row text-red-600 items-center gap-x-4">
            <ExclamationTriangleIcon className="w-8" /> You will overspend if
            you keep on at this rate
          </p>
        </div>
        <div>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  )
}
