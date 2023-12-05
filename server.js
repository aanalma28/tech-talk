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

  server.use(express.json()) // for parsing application/json
  server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  // Custom Express routes
  server.post('/register', async (req, res) => {    
    try{
      const data = await req.body
      
      const findData = await User.findOne({email: data.email}).exec()

      if(findData){
        return res.status(409).json({
          message: "mail already exists",
          success: false,
        })
      }

      const createUser = new User({
        username: data.username,
        email: data.email,
        password: data.password
      })

      await createUser.save()

      res.status(200).json({
          message: "Registration Successfully!",
          success: true,
          data: req.body
      })

    }catch(e){
      res.status(500).json({
        message: "Server Error",
        errors: e,
        success: false
      })
    }
  });

//   Handle Next.js routes
  server.all('*', (req, res) => {    
    return handle(req, res);
  });

  // Start Express server
  server.listen(3000, async (err) => {    
    // // connect to db
    // MongoClient.connect('mongodb://localhost:27017/techtalk-db', (err, client) => {
    //   if(err) throw err

    //   const db = client.db('techtalk-db')

    //   db.collection('users').find().toArray((err, result) => {
    //     if(err) throw err

    //     console.log(result)
    //   })
    // })
    try{
      await mongoose.connect('mongodb://localhost:27017/techtalk-db')
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    }catch(err){
      console.error(err)
    }

  });
});