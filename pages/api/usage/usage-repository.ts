import { createTables, selectAll, TABLE, seedData } from './data-store/data'

export const getAllUsage = () =>
  selectAll(`select cumulative, readingDate, unit from ${TABLE} order by readingDate ASC`)

export const setup = () => {
  createTables()
  seedData()
}
