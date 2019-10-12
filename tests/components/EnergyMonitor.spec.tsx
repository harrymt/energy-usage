import React from 'react'
import renderer from 'react-test-renderer'
import EnergyMonitor from '../../components/EnergyMonitor'
import fetch from 'isomorphic-unfetch'
import { mocked } from 'ts-jest/utils'

jest.mock('isomorphic-unfetch')
const fetchMock = mocked(fetch, true)

describe('EnergyMonitor', () => {
  it('should render correctly', () => {
    fetchMock.mockResolvedValue({
      json: () => [
        {
          cumulative: 17580,
          readingDate: '2017-03-28T00:00:00.000Z',
          unit: 'kWh',
        },
        {
          cumulative: 18580,
          readingDate: '2017-04-28T00:00:00.000Z',
          unit: 'kWh',
        },
        {
          cumulative: 19580,
          readingDate: '2017-05-28T00:00:00.000Z',
          unit: 'kWh',
        },
      ],
    } as any)
    const tree = renderer.create(<EnergyMonitor />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
