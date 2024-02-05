const mongoose = require('mongoose')

// create a model
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

const postsSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    title:{
        type :String,
        required: true
    },
    slug:{
        type: Number,
        require: true     
    },    
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: 'default.jpg'   
    }
})
  
const User = mongoose.model('User', userSchema)
const Posts = mongoose.model('Posts', postsSchema)
module.exports = {User, Posts}