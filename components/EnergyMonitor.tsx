import React from 'react'
import * as meterReadingsData from '../data/meter-readings.json'
import Chart from './Chart'
import styled from 'styled-components'
import { breakpoints } from './Variables'
import MeterTable from './MeterTable'
import { H2 } from './Typography'

const FlexBox = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`

const FlexChild = styled.div`
  padding-top: 7vh;
  flex-direction: column;
  width: 100%;
`

// TODO don't use this type for both
export interface EnergyUsage {
  date?: string
  energyUsage?: number
  cumulative?: number
  readingDate?: string
  unit?: string
}

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
