const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()

require('dotenv').config();
const db_link = process.env.DB_LINK

// middleware
app.use(express.json()) //ditambahkan agar bisa menggunakan json
app.use(express.urlencoded({extended:false})) //digunakan agar bisa menggunakan form urlencoded

// routes
app.use('/api/products', productRoute)

app.get('/', function(req, res){
    res.send('Hello there guys!!')
})

mongoose.connect(db_link)
    .then(() => {
        console.log("Connected to database!")
        app.listen(3000, () => {
            console.log("Note: This server run on port 3000")
        })
    })
    .catch(() => {
        console.log("Connection Failed!")
    })