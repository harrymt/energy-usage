import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import styled from 'styled-components'

const ChartContainer = styled.div`
  width: 100%;
  max-width: 700px;
`

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | undefined
}

export const Chart = ({ data }: ChartProps) => {
  return (
    <ChartContainer>
      <VictoryChart
        horizontal
        domainPadding={{ x: 20, y: 20 }}
        animate={{
          duration: 100,
          onLoad: { duration: 100 },
        }}>
        <VictoryBar
          barRatio={0.75}
          style={{
            data: { fill: '#E4228E' },
          }}
          x={'date'}
          y={'energyUsage'}
          data={data}
        />
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          label="Usage (kWh)"
          style={{
            axisLabel: { padding: 35 },
          }}
        />
      </VictoryChart>
    </ChartContainer>
  )
}

export default Chart
