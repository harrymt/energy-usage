import React from 'react'
import * as meterReadingsData from '../data/meter-readings.json'
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from 'victory'
import styled from 'styled-components'
const BarWrapper = styled.div`
  width: 60%;
  max-width: 700px;
`

const EnergyMonitor = () => {
  const meterReadings = meterReadingsData.electricity

  const toFriendlyDate = (date: string) => {
    return new Date(Date.parse(date)).toLocaleDateString('en-US')
  }
  const energyUsageData = []
  for (let i = 0; i < meterReadings.length - 2; i++) {
    const energyUsage =
      meterReadings[i + 1].cumulative - meterReadings[i].cumulative
    energyUsageData.push({
      date: toFriendlyDate(meterReadings[i + 1].readingDate),
      energyUsage,
    })
  }

  const meterReadingsRows = meterReadings.map(reading => (
    <tr key={reading.readingDate}>
      <td>{reading.readingDate}</td>
      <td>{reading.cumulative}</td>
      <td>{reading.unit}</td>
    </tr>
  ))

  console.log(energyUsageData)
  return (
    <>
      <BarWrapper>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 20, y: 20 }}>
          <VictoryBar
            barRatio={0.7}
            style={{
              data: { fill: '#E4228E' },
            }}
            x={'date'}
            y={'energyUsage'}
            data={energyUsageData}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            horizontal={true}
          />
          <VictoryAxis />
          <VictoryAxis
            dependentAxis
            label="Usage (km)"
            style={{
              axisLabel: { padding: 35 },
            }}
          />
        </VictoryChart>
      </BarWrapper>
      <h2>Meter Readings</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Reading</th>
            <th>Unit</th>
          </tr>
          {meterReadingsRows}
        </tbody>
      </table>
    </>
  )
}

export default EnergyMonitor
