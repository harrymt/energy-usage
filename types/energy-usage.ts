export interface EnergyUsage {
  date?: string
  energyUsage?: number
}

export interface MeterReading {
  cumulative: number
  readingDate: string
  unit?: string
}
