'use client'

import React, { useRef, useEffect } from 'react'
import { init, getInstanceByDom } from 'echarts'
import type { CSSProperties } from 'react'
import type { EChartsOption, ECharts, SetOptionOpts } from 'echarts'

export interface ReactEChartsProps {
  option: EChartsOption
  style?: CSSProperties
  settings?: SetOptionOpts
  loading?: boolean
  theme?: 'light' | 'dark'
}

export function Chart({
  option,
  style,
  settings,
  loading,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined

    if (chartRef.current !== null) {
      chart = init(chartRef.current)
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize()
    }
    window.addEventListener('resize', resizeChart)

    // Return cleanup function
    return () => {
      chart?.dispose()
      window.removeEventListener('resize', resizeChart)
    }
  }, [option])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      chart?.setOption(option, settings)
    }
  }, [option, settings])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      loading === true ? chart?.showLoading() : chart?.hideLoading()
    }
  }, [loading])

  return <div ref={chartRef} style={{ ...style }} />
}
