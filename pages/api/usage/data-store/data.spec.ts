import * as database from './data'
import { expect } from 'chai'
import seedData from './mock-data.json'
import { setup } from '../usage-repository'

describe('data', () => {
  afterEach(() => {
    database.deleteAllTables()
  })

  it('initialize should create the database schema without errors', done => {
    database.createTables()
    const allSql = database.connection.prepare(
      `SELECT * FROM ${database.TABLE}`,
    )
    database.connection.transaction(() => {
      const selectResult = allSql.all()
      expect(selectResult).to.have.length(0)
      done()
    })
  })

  it.only('seed data should import the data from the seedData file', done => {
    setup()
    const allSql = database.connection.prepare(
      `SELECT * FROM ${database.TABLE} ORDER BY cumulative`,
    )

    const selectResult = allSql.all()
    console.log(selectResult)

    expect(selectResult).to.have.length(seedData.electricity.length)
    selectResult.forEach((row, index) => {
      expect(row.cumulative).to.equal(seedData.electricity[index].cumulative)
    })
    done()
  })

  it('select all data should return a promise to all rows', done => {
    setup()

    const { electricity } = seedData
    const data = database.selectAll(`SELECT * FROM ${database.TABLE}`) as any[]
    expect(data).to.have.length(electricity.length)
    done()
  })
})
