'use client'

import { format } from 'date-fns'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { CardSkeleton, ChartSkeleton } from '../skeletons'
import CardWrapper from './card-wrapper'
import SavingsCharts from './savings-charts'
import PensionChart from './pension-chart'

export default function Overview() {
  const now = new Date()
  const date = format(now, 'EEEE do MMMM')
  const shortDate = format(now, 'dd/MM/yyyy')

  const [finances, setFinances] = useState([])

  const getFinances = () => {
    axios
      .get(`http://localhost:4000/finances/1`)
      .then(({ data }) => {
        console.log('data', data)
      })
      .catch((e) => {
        alert('something happened')
        console.log('error', e)
      })
  }

  useEffect(() => {
    getFinances()
  }, [])

  return (
    <div className="w-full items-center justify-center">
      <div className="flex flex-col md:flex-row md:gap-8 pb-5 place-items-baseline">
        <h1 className="text-2xl">{date}</h1>
        <p className="text-sm text-gray-400">last updated: {shortDate}</p>
      </div>
      <div className="mb-5">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="flex flex-row">
        <div className="hidden md:flex flex-row space-x-2">
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
