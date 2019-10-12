import React from 'react'
import styled from 'styled-components'
import { EnergyUsage } from './EnergyMonitor'

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

export const MeterTable = ({ data }: { data: EnergyUsage[] }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Reading</th>
          <th>Unit</th>
        </tr>
      </thead>

      <tbody>
        {data.map(reading => (
          <tr key={reading.readingDate}>
            <td>{reading.readingDate}</td>
            <td>{reading.cumulative}</td>
            <td>{reading.unit}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MeterTable
