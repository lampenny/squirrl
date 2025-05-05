'use client'

import React from 'react'
import { format } from 'date-fns'
import CardWrapper from './card-wrapper'
import ChartsWrapper from './charts-wrapper'

export default function Home() {
  const now = new Date()
  const date = format(now, 'EEEE do MMMM')

  return (
    <div className="w-full items-center justify-center">
      <div className="flex flex-col md:flex-row md:gap-8 pb-5 place-items-baseline justify-between">
        <div className="flex flex-row place-items-baseline gap-x-5">
          <h1 className="text-3xl font-bold text-lime-700">{date}</h1>
        </div>
      </div>
      <div className="mb-5">
        <CardWrapper />
      </div>

      <div className="md:flex hidden flex-row w-full">
        <ChartsWrapper />
      </div>
    </div>
  )
}
