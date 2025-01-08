import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.get('/', (req, res) => {
  res.send(
    '<h1 style="color: red; text-align: center;">This is the root route</h1>'
  );
});

app.get('/flamingo-images', async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=flamingo`;
  const response = await fetch(API);
  const data = await response.json();

  res.json(data.results);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
