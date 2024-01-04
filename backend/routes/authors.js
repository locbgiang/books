const express = require('express')
const router = express.Router()

// ALL authors Route
router.get('/', (req, res) =>{
    res.render('authors/index')
})

// New author Route
router.get('/new', (req, res) =>{
    res.render('authors/new')
})

// Create Author Route
router.post('/', (req, res) => {
    res.send('Create')
})



module.exports = router