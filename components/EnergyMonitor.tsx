import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import MeterTable from './MeterTable'
import { H2 } from './Layout/Typography'
import { FlexBox, FlexChild } from './Layout/Layout'
import fetch from 'isomorphic-unfetch'
import { MeterReading, EnergyUsage } from '../types/energy-usage'

const toFriendlyDate = (date: string) =>
  new Date(Date.parse(date)).toLocaleDateString('en-US')

const EnergyMonitor = () => {
  const [energyUsageData, setEnergyUsage] = useState<EnergyUsage[]>([])
  const [meterReadings, setMeterReadings] = useState<MeterReading[]>()

  const fetchData = async () => {
    try {
      const res = await fetch('/api/usage')
      const result = await res.json()
      return result
    } catch (error) {
      console.log(error)
      return []
    }
  }
  useEffect(() => {
    const getData = async () => {
      const readings = await fetchData()
      console.log(readings)

      const usage = []
      for (let i = 0; i < readings.length - 2; i++) {
        const date = toFriendlyDate(readings[i + 1].readingDate)
        const energyUsage = readings[i + 1].cumulative - readings[i].cumulative
        usage.push({ date, energyUsage })
      }

      console.log(usage)

      setEnergyUsage(usage)
      setMeterReadings(readings)
    }
    getData()
  }, [])

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
