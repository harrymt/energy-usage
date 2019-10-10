import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import EnergyMonitor from '../components/EnergyMonitor'

const Container = styled.div`
  margin-top: 10vh;
  font-family: monospace;
  text-align: center;
`

const Index = () => {
  return (
    <Container>
      <Header />
      <EnergyMonitor />
    </Container>
  )
}

export default Index
