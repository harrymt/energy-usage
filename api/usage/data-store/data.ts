import * as sqlite3 from 'sqlite3';
import mockData from './mock-data.json';

const SQLite = sqlite3.verbose();

export const connection = new SQLite.Database(':memory:');
export const TABLE = 'meter_reads';

export const createTables = () => {
  connection.serialize(() => {
    connection.run(
      `CREATE TABLE ${TABLE} (cumulative INTEGER, readingDate TEXT, unit TEXT)`
    );
  });
};

export const deleteAllTables = () => {
  connection.serialize(() => {
    connection.run(`DROP TABLE ${TABLE}`);
  });
};

export const seedData = () => {
  connection.serialize(() => {
    const { electricity } = mockData;
    electricity.forEach(data => {
      connection.run(
        `INSERT INTO ${TABLE} (cumulative, readingDate, unit) VALUES (?, ?, ?)`,
        [data.cumulative, data.readingDate, data.unit]
      );
    });
  });
};

export const selectAll = (sql: string, params = []) => {
  return new Promise((resolve, reject) => {
    connection.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
