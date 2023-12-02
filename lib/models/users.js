import mongoose from 'mongoose'
const connectDb = require('../server')

connectDb()

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

const User = mongoose.model('User', userSchema)
module.exports = User