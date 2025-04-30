import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import { format } from 'date-fns'
import { CurrentUserContext } from '@/app/providers'
import { fetchFinances } from './card-wrapper'
import { ChartSkeleton } from '../skeletons'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function PensionChart() {
  const now = new Date()
  const month = format(now, 'MMMM')
  const { currentUser } = useContext(CurrentUserContext)
  const userId = currentUser?.user_id

  const {
    isLoading,
    data: finances,
    isError,
    error,
  } = useQuery({
    queryKey: ['finances', userId],
    queryFn: () => fetchFinances(userId),
    enabled: !!userId,
  })

  if (!finances) {
    return <ChartSkeleton />
  }

  const pieData = [
    { name: 'Pension', value: 50000 },
    { name: 'Investments', value: 23400 },
  ]

  if (isLoading) {
    return <ChartSkeleton />
  }

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
