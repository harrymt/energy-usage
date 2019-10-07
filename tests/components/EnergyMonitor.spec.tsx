import React from 'react'
import renderer from 'react-test-renderer'
import EnergyMonitor from '../../components/EnergyMonitor'

describe('EnergyMonitor', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<EnergyMonitor />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
