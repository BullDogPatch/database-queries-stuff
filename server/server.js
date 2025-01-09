import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.get('/', (req, res) => {
  res.send(
    '<h1 style="color: red; text-align: center;">This is the root route</h1>'
  );
});

const dbConnectionString = process.env.DATABASE_URL;
// console.log(dbConnectionString);
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

app.get('/players', async (req, res) => {
  res.json(query.rows);
});

app.get('/captain', async (req, res) => {
  const query = await db.query(`SELECT * FROM players WHERE is_captain = true`);
  res.json(query.rows[0]);
});

app.post('/players', async (req, res) => {
  const query = await db.query(`INSERT INTO players (name) `);
  res.json(query.rows);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
