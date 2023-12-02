// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();  

  // Custom Express routes
  server.get('/test', (req, res) => {
    res.send('Hello')
  });

//   Handle Next.js routes
  server.all('/', (req, res) => {    
    return handle(req, res);
  });

  // Start Express server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});