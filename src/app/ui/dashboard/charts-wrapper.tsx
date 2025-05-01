// TO DO create charts wrapper to share data
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
import PensionChart from './pension-chart'
import OverviewChart from './overview-chart'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function ChartsWrapper() {
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

  return (
    <div>
      {!finances || isLoading ? (
        <ChartSkeleton />
      ) : (
        <div>
          <PensionChart finances={finances} />
          <OverviewChart finances={finances} />
        </div>
      )}
    </div>
  )
}
