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


export default app;