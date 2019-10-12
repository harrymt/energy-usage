import * as data from './data';
import { expect } from 'chai';
import sampleData from './mock-data.json';

describe('data', () => {
  it('initialize should import the data from the sampleData file', done => {
    data.createTables();
    data.seedData();

    data.connection.serialize(() => {
      data.connection.all(
        'SELECT * FROM meter_reads ORDER BY cumulative',
        (error, selectResult) => {
          expect(error).to.equal(null);
          expect(selectResult).to.have.length(sampleData.electricity.length);
          selectResult.forEach((row, index) => {
            expect(row.cumulative).to.equal(
              sampleData.electricity[index].cumulative
            );
          });
          done();
        }
      );
    });
  });
});
