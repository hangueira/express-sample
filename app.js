import express from 'express';

const app = express();

app.listen(8080);

app.get('/', (req, res) => {
  console.log('wow');
  res.send('hello world');
});
