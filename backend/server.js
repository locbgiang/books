if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express") // import express
const app = express()               // get the app portion from express
const expressLayouts = require('express-ejs-layouts')   // get the express layout package
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')       // connects index.js
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')

// configuring
app.set('view engine', 'ejs')       // set our view engine, using ejs
app.set('views', __dirname + '/views')   // set where our views are coming from, current directory + views
app.set('layout', 'layouts/layout') // every file is going to be put into this layout file
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')    // import mongoose
mongoose.connect(process.env.DATABASE_URL)  // connect database url, use .env or 

const db = mongoose.connection
db.on('error', error => console.error(error))       // error message
db.once('open', () => console.log('Connected to Mongoose'))     // connected message

app.use('/', indexRouter)       // use index.js
app.use('/authors', authorRouter)   // use authors.js
app.use('/books', bookRouter)


app.listen(process.env.PORT || 3000) // pull from environment, default to port 3000