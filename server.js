// import express from 'express'
// import mongoose  from 'mongoose'
// import Cards from "./dbCards.js"
// import Cors from "cors"

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
// const Cards = require('./model/dbCards')
//App Config
const app = express()
const port = process.env.PORT || 5000
// const connection_url = "mongodb+srv://weloMo:barcaiscool1@cluster0.evcfazs.mongodb.net/?retryWrites=true&w=majority"

// Middlewares
app.use(express.json())
app.use(cors())

// DB config
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongodb database connection established successfully");
})
//API Endpoints
const cardRouter = require('./route/card');

app.use('/cards', cardRouter);
// app.get('/', (req, res) => res.status(200).send('Hello Welo!'));
// app.post('/tinder/cards',addCard );

// app.get('/tinder/cards', getCard);


//Listener 

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
