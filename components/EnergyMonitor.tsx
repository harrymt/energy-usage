import React from 'react'
import * as meterReadingsData from '../data/meter-readings.json'
import Chart from './Chart'
import { H2 } from './Typography'
import styled from 'styled-components'

const Table = styled.table`
  color: rgb(0, 51, 102);
  text-align: left;
  width: 100%;

  thead {
    background: rgb(242, 242, 242);
  }

  th,
  td {
    padding: 1rem;
  }
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
      <Chart data={energyUsageData} />
      <H2>Meter Readings</H2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Reading</th>
            <th>Unit</th>
          </tr>
        </thead>

        <tbody>{meterReadingsRows}</tbody>
      </Table>
    </>
  )
}

export default EnergyMonitor
