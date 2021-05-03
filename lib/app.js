import express from 'express';
import cors from 'cors';
import creatures from '../data/creatures.js';


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('trying something else');
 
});

app.get('/api/creatures', (req, res) => {
  res.json(creatures);
});

app.get('/api/creatures/:id', (req, res) => {
  res.json(creatures[0]);
}
);

export default app;