import { MeterReading } from '../types/energy-usage'

const toFriendlyDate = (date: string) =>
  new Date(Date.parse(date)).toLocaleDateString('en-US')

export const calculateUsage = (readings: MeterReading[]) => {
  const usage = []
  for (let i = 0; i < readings.length - 2; i++) {
    const date = toFriendlyDate(readings[i + 1].readingDate)
    const energyUsage = readings[i + 1].cumulative - readings[i].cumulative
    usage.push({ date, energyUsage })
  }
  return usage
}
