const express = require('express') // import express
const router = express.Router()     // grab router portion from express
const Book = require('../models/book')

router.get('/', async (req, res)=>{
    let books = []
    try {
        books = await Book.find().sort({ createAt: 'desc'}).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
})

module.exports = router