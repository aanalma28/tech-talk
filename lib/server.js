// server.js
const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const slugify = require('slugify')
const fs = require('fs')

// models
const {Users, Posts} = require('./models')

// create rand_string
async function generateRandomString(min, max) {
  let randomMath = Math.floor(Math.random() * (max - min + 1)) + min
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  const randomValues = new Uint32Array(randomMath)  
  let result = '';
  for (let i = 0; i < randomMath; i++) {
    randomValues[i] = Math.floor(Math.random() * charactersLength)
    result += characters.charAt(randomValues[i] % charactersLength);
  }
  return result;
}

// handle files
let filename = ''
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDirectory = './public/uploads/posts'
    const fullPath = path.join(uploadDirectory, '/')        
    cb(null, fullPath)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    filename = `${file.fieldname}-${uniqueSuffix}.jpg`
    cb(null, filename)
  },  
})

const readFile = () => {
  try{
    const root = './public/uploads/posts'
    const filePath = path.join(root, `${filename}`)
    const deleteFile = fs.unlinkSync(filePath)
    return true
  }catch(err){
    return err
  }
}

const upload = multer({ storage: storage})
// const uploadFile = (req, res) => {
//   upload(req, res, function (err) {
//     if(err instanceof multer.MulterError){
//       return res.status(500).json({message: 'An error occured while uploading file', success: false})
//     } else if(err){
//       return res.status(500).json({message: err.message, success: false})
//     }
    
//     next()
//   })
// }


const next = require('next');
const e = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express(); 

  server.use(express.json()) // for parsing application/json
  server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  server.use(cookieParser())  

  // Custom Express routes
  server.post('/register', async (req, res) => {    
    try{
      const data = await req.body      
      const findData = await Users.findOne({email: data.email}).exec()
      const rand_id = await generateRandomString(5, 10)
      
      if(findData){
        return res.status(409).json({
          message: "Email already exists",
          success: false,
        })
      }

      const createUser = new Users({
        user_id: rand_id,
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
      const findData = await Users.findOne({email: data.email, password: data.password}).exec()

      if(findData){
        const userData = {
          user_id: findData.user_id,
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

  server.get('/posts', async(req, res) => {
    try{
      const query = req.query.user_id      
      const posts = await Posts.find({user_id: query}).exec()        

      if(posts.length == 0){
        return res.status(404).json({
          message: 'No post found for this user',
          success: false,
          data: []
        })
      }

      return res.status(200).json({
        message: 'Data Found',
        success: true,
        data: posts
      })      

    }catch(err){
      return res(500).json({
        message: e,
        success: false
      })
    }
  })

  server.get('/getallposts', async(req, res) => {
    try{      
      const posts = await Posts.find({}).exec()

      if(posts.length == 0){
        return res.status(404).json({
          message: 'Post not found',
          success: false,
          data: []
        })
      }

      return res.status(200).json({
        message: 'All Data Found',
        success: true,
        data: posts
      })
    }catch{
      return res(500).json({
        message: e,
        success: false
      })
    }
  })

  server.post('/posts/create', upload.single('file'), async (req, res) => {    
    try{
      const data = req.file
      const cookies = req.cookies.data
      const body = req.body
      const tokenData = JSON.parse(cookies)
      const rand_id = await generateRandomString(5, 10) 
      
      console.log(data)
      console.log(cookies)
      console.log(filename)      

      const isSlugAvailable = await Posts.findOne({slug: slugify(body.title)}).exec()
      
      if(isSlugAvailable){
        await readFile()
        return res.status(409).json({
          message: "Slug has already exist !",
          success: false
        })        
      }      

      const createPost = new Posts({
        user_id: tokenData.user_id,
        post_id: rand_id,
        title: body.title,
        slug:  slugify(body.title),
        description: body.description,
        image:  data ? data.filename : null
      })

      await createPost.save()

      // send file to server

      res.status(200).json({
        message: 'Post Created!',
        success: true,    
      })
    }catch(e){
      res.status(500).json({
        message: e,
        success: false
      })
    }           
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