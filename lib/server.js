const mongoose = require('mongoose')

const connectMongoDb = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/techtalk-db')
        console.log("connected to mongodb")
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connectMongoDb