import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;
// console.log(dbConnectionString);
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

db.query(
  `INSERT INTO players (name, shirt_number, position, nationality, is_captain)
  VALUES ('Cody Gakpo', '18', 'forward', 'dutch', 'false')`
);
