const mongoose = require('mongoose')
const public_post = mongoose.Schema({
    PosterEmail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
    }
})
const SaveToDB = mongoose.model("Users-Post",public_post)
module.exports = SaveToDB;