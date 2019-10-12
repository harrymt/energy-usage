import React from 'react'
import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from 'victory'
import styled from 'styled-components'

const BarWrapper = styled.div`
  width: 60%;
  max-width: 700px;
`

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | undefined
}

export const Chart = ({ data }: ChartProps) => {
  return (
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
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          horizontal={true}
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
    </BarWrapper>
  )
}

export default Chart
