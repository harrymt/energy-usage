import React from 'react'
import * as meterReadingsData from '../data/meter-readings.json'
import Chart from './Chart'
import MeterTable from './MeterTable'
import { H2 } from './Layout/Typography'
import { EnergyUsage } from '../types/energy-usage'
import { FlexBox, FlexChild } from './Layout/Layout'

const EnergyMonitor = () => {
  const meterReadings = meterReadingsData.electricity

  const toFriendlyDate = (date: string) => {
    return new Date(Date.parse(date)).toLocaleDateString('en-US')
  }
  const energyUsageData: EnergyUsage[] = []
  for (let i = 0; i < meterReadings.length - 2; i++) {
    const energyUsage =
      meterReadings[i + 1].cumulative - meterReadings[i].cumulative
    energyUsageData.push({
      date: toFriendlyDate(meterReadings[i + 1].readingDate),
      energyUsage,
    })
  }

  console.log(energyUsageData)
  console.log(meterReadings)

  return (
    <FlexBox>
      <FlexChild>
        <H2>Estimated Usage</H2>
        <Chart data={energyUsageData} />
      </FlexChild>
      <FlexChild>
        <H2>Meter Readings</H2>
        <MeterTable data={meterReadings} />
      </FlexChild>
    </FlexBox>
  )
}

export default EnergyMonitor
