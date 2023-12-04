// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true
  },
  email: {
      type: String,
      unique: true,
      required: true        
  },
  password: {
      type: String,
      required: true
  }
})

const User = mongoose.model('User', userSchema)

app.prepare().then(() => {
  const server = express(); 

  // connect to db
  MongoClient.connect('mongodb://localhost:27017/techtalk-db', (err, client) => {
    if(err) throw err

    const db = client.db('techtalk-db')

    db.collection('users').find().toArray((err, result) => {
      if(err) throw err

      console.log(result)
    })
  })

  server.use(express.json()) // for parsing application/json
  server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  // Custom Express routes
  server.post('/test', async (req, res) => {
    try{
      const data = await req.body



      res.status(200).json({
          message: "Data send!",
          success: true,
          data: req.body
      })

    }catch(e){
      res.status(500).json({
        message: "Invalid",
        success: false
      })
    }
  });

//   Handle Next.js routes
  server.all('*', (req, res) => {    
    return handle(req, res);
  });

  // Start Express server
  server.listen(3000, (err) => {    
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});