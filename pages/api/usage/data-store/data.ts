import Database from 'better-sqlite3'
import mockData from './mock-data.json'

export const connection = new Database(':memory:')
export const TABLE = 'meter_reads'

export const createTables = () => {
  connection
    .prepare(
      `CREATE TABLE IF NOT EXISTS ${TABLE} (cumulative INTEGER, readingDate TEXT, unit TEXT)`,
    )
    .run()
}

export const deleteAllTables = () => {
  connection.prepare(`DROP TABLE ${TABLE}`).run()
}

export const seedData = () => {
  const insert = connection.prepare(
    `INSERT INTO ${TABLE} (cumulative, readingDate, unit) VALUES (?, ?, ?)`,
  )
  const { electricity } = mockData
  electricity.forEach(data => {
    insert.run(data.cumulative, data.readingDate, data.unit)
  })
}

export const selectAll = (sql: string) => {
  const select = connection.prepare(sql)
  return select.all()
}
