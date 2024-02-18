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
        type: String,
        require: true     
    },    
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: 'default.jpg'   
    },
    star:{
        type: Number,
        default: 0
    },
    comment:{
        type: Number,
        default: 0
    },
    share:{
        type: Number,
        default: 0
    }

})
  
const Users = mongoose.model('User', userSchema)
const Posts = mongoose.model('Post', postsSchema)
module.exports = {Users, Posts}