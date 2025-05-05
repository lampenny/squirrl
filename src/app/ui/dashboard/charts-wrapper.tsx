// TO DO create charts wrapper to share data
import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CurrentUserContext } from '@/app/providers'
import { fetchFinances } from './card-wrapper'
import { ChartSkeleton } from '../skeletons'
import PensionInvestCharts from './pension-invest-charts'
import OverviewChart from './overview-chart'
import ErrorPlaceHolder from '../error-placeholder'

export default function ChartsWrapper() {
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

  if (isError) {
    return <ErrorPlaceHolder />
  }

  return (
    <div>
      {!finances || isLoading ? (
        <ChartSkeleton />
      ) : (
        <div className="flex flex-col gap-y-5">
          <OverviewChart finances={finances} />
          <PensionInvestCharts finances={finances} />
        </div>
      )}
    </div>
  )
}
