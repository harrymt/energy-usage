import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import MeterTable from './MeterTable'
import { H2 } from './Layout/Typography'
import { FlexBox, FlexChild } from './Layout/Layout'
import { MeterReading, EnergyUsage } from '../types/energy-usage'
import { getUsage } from '../services/api-service'
import { calculateUsage } from '../services/usage-service'

const EnergyMonitor = () => {
  const [energyUsage, setUsage] = useState<EnergyUsage[]>([])
  const [meterReadings, setMeterReadings] = useState<MeterReading[]>()

  useEffect(() => {
    const getData = async () => {
      const readings = await getUsage()
      const usage = calculateUsage(readings)

      setUsage(usage)
      setMeterReadings(readings)
    }

    getData()
  }, [])

  return (
    <FlexBox>
      <FlexChild>
        <H2>Estimated Usage</H2>
        <Chart data={energyUsage} />
      </FlexChild>
      <FlexChild>
        <H2>Meter Readings</H2>
        <MeterTable data={meterReadings} />
      </FlexChild>
    </FlexBox>
  )
}

export default EnergyMonitor
