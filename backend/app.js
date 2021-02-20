//Imports all the routes

const express = require ('express')
const app = express()

//So that everything comes in JSON format when we hit the APIs
app.use(express.json())


//Importing all the product routes
const products = require('./routes/product');
app.use('/api/v1', products)

module.exports = app