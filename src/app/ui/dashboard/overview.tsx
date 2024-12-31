'use client'

import { Suspense, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { CardSkeleton, ChartSkeleton } from '../skeletons'
import CardWrapper, { FinancialData } from './card-wrapper'
import SavingsCharts from './savings-charts'
import PensionChart from './pension-chart'
import { CurrentUserContext } from '@/app/providers'

export default function Overview() {
  const { currentUser } = useContext(CurrentUserContext)
  const [finances, setFinances] = useState<FinancialData>()

  const now = new Date()
  const date = format(now, 'EEEE do MMMM')
  const shortDate = format(now, 'dd/MM/yyyy')

  const getFinances = () => {
    axios
      .get(`http://localhost:4000/finances/${currentUser.user_id}`)
      .then(({ data }) => {
        setFinances(data)
      })
      .catch((e) => {
        console.log('error', e)
      })
  }

  useEffect(() => {
    if (currentUser) {
      getFinances()
    }
  }, [])

  return (
    <div className="w-full items-center justify-center">
      <div className="flex flex-col md:flex-row md:gap-8 pb-5 place-items-baseline justify-between">
        <div className="flex flex-row place-items-baseline gap-x-5">
          <h1 className="text-2xl">{date}</h1>
          <p className="text-sm text-gray-400">last updated: {shortDate}</p>
        </div>
      </div>
      <div className="mb-5">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper finances={finances} />
        </Suspense>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="hidden md:flex lg:flex-row flex-col lg:space-x-2 space-y-2 lg:space-y-0">
          <Suspense fallback={<ChartSkeleton />}>
            <SavingsCharts value="¥500,000" />
          </Suspense>
          <Suspense fallback={<ChartSkeleton />}>
            <PensionChart value="value" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
