import { MeterReading } from '../types/energy-usage'

export const toFriendlyDateFromString = (date: string): string => {
  const newDate = new Date(Date.parse(date))
  return toFriendlyDate(newDate)
}

export const toFriendlyDate = (date: Date): string => {
  const clone = new Date(date)
  const m = clone.getMonth()
  return `${m < 10 ? `0${m}` : m}/${clone.getFullYear()}`
}

const nextMonth = (today: Date) => {
  const clone = new Date(today)
  return new Date(clone.setMonth(clone.getMonth() + 1))
}

export const calculateUsage = (readings: MeterReading[]) => {
  const usage = []

  let i = 0
  for (; i < readings.length - 1; i++) {
    const date = toFriendlyDateFromString(readings[i + 1].readingDate)
    const energyUsage = readings[i + 1].cumulative - readings[i].cumulative
    usage.push({ date, energyUsage })
  }

  // Add last date
  const lastDate = readings[i].readingDate
  usage.push({
    date: toFriendlyDateFromString(lastDate),
    energyUsage: readings[i].cumulative - readings[i - 1].cumulative,
  })

  let difference = 0
  let amount = 1
  for (let i = readings.length - 3; i < readings.length; i++) {
    difference += readings[i].cumulative - readings[i - 1].cumulative
    amount++
  }

  usage.push({
    energyUsage: Math.floor(difference / amount),
    // TODO fixed these reference error
    date: toFriendlyDate(nextMonth(new Date(Date.parse(lastDate)))),
    label: 'Next month',
  })

  console.log(usage)

  return usage
}
