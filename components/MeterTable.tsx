import React from 'react'
import { Table } from './Layout/Layout'
import { MeterReading } from '../types/energy-usage'
import { toFriendlyDate } from '../services/usage-service'

export const MeterTable = ({ data }: { data?: MeterReading[] }) => {
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
        {data &&
          data.map(({ readingDate, cumulative, unit }) => (
            <tr key={readingDate}>
              <td>{toFriendlyDate(readingDate)}</td>
              <td>{cumulative}</td>
              <td>{unit}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default MeterTable
