const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const cardSchema = Schema({
    name : String,
    imgUrl: String
})

module.exports =  mongoose.model('cards', cardSchema)