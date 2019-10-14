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

    database.connection.serialize(() => {
      database.connection.all(
        `SELECT * FROM ${database.TABLE}`,
        (error, selectResult) => {
          expect(error).to.equal(null)
          expect(selectResult).to.have.length(0)
          done()
        },
      )
    })
  })

  it('seed data should import the data from the seedData file', done => {
    setup()

    database.connection.serialize(() => {
      database.connection.all(
        `SELECT * FROM ${database.TABLE} ORDER BY cumulative`,
        (error, selectResult) => {
          expect(error).to.equal(null)
          expect(selectResult).to.have.length(seedData.electricity.length)
          selectResult.forEach((row, index) => {
            expect(row.cumulative).to.equal(
              seedData.electricity[index].cumulative,
            )
          })
          done()
        },
      )
    })
  })

  it('select all data should return a promise to all rows', done => {
    setup()

    const { electricity } = seedData
    database.connection.serialize(async () => {
      const data = (await database.selectAll(
        `SELECT * FROM ${database.TABLE}`,
      )) as any[]
      expect(data).to.have.length(electricity.length)
      done()
    })
  })
})
