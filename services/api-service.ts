import fetch from 'isomorphic-unfetch'
import { MeterReading } from '../types/energy-usage'

const endpoint = process.env.API || 'http://localhost:9000'

export const getUsage = async (): Promise<MeterReading[]> => {
  try {
    const res = await fetch(`${endpoint}/usage`)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
    return []
  }
}
