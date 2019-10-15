import { MeterReading } from '../types/energy-usage'

export const toFriendlyDate = (date: string): string => {
  const newDate = new Date(Date.parse(date))
  const m = newDate.getMonth()
  return `${m < 10 ? `0${m}` : m}/${newDate.getFullYear()}`
}

export const calculateUsage = (readings: MeterReading[]) => {
  const usage = []
  const nextMonth = (today: string) => {
    const date = new Date(Date.parse(today))
    return `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`
  }
  let lastDate = new Date(Date.now()).toDateString()

  for (let i = 0; i < readings.length - 2; i++) {
    const date = toFriendlyDate(readings[i + 1].readingDate)
    const energyUsage = readings[i + 1].cumulative - readings[i].cumulative
    usage.push({ date, energyUsage })

    lastDate = readings[i + 1].readingDate
  }

  let difference = 0
  let amount = 1
  for (let i = readings.length - 3; i < readings.length; i++) {
    difference += readings[i].cumulative - readings[i - 1].cumulative
    amount++
  }

  usage.push({
    energyUsage: Math.floor(difference / amount),
    date: toFriendlyDate(nextMonth(lastDate)),
    label: 'Next month'
  })

  return usage
}
