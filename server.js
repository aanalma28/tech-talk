// server.js
const express = require('express');
const cookieParser = require('cookie-parser')
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDirectory = './uploads'
    const fullPath = path.join(uploadDirectory, '/')

    cb(null, fullPath)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
  }
})

const upload = multer({ storage: storage })

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
  server.use(cookieParser())  

  // Custom Express routes
  server.post('/register', async (req, res) => {    
    try{
      const data = await req.body
      
      const findData = await User.findOne({email: data.email}).exec()

      if(findData){
        return res.status(409).json({
          message: "Email already exists",
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

  server.post('/login', async (req, res) => {
    try{
      const data = req.body
      const findData = await User.findOne({email: data.email, password: data.password}).exec()

      if(findData){
        const userData = {
          username: findData.username,
          email: findData.email,
          password: findData.password
        }
  
        const userDataString = JSON.stringify(userData)
  
        return res.status(200).cookie(
          'data', userDataString, { expires: new Date(Date.now() + 900000)}
        ).json({
          message: 'Login Successfully',
          success: true
        })
      }

      res.status(401).json({
        message: 'Invalid Credentials',
        success: false
      })
    }
    catch(e){
      res.status(500).json({
        message: "Server Error",
        success: false,
        errors: e,      
      })
    }
  })

  server.post('/posts/create', upload.single('file'), async (req, res) => {
    const data = req.file

    console.log(data)

    res.status(200).json({
      message: 'Post Created!',
      success: true,    
    })
  })

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
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    }catch(err){
      console.error(err)
    }

  });
});