const express = require('express') // import express
const router = express.Router()     // grab router portion from express

router.get('/', (req, res)=>{
    res.render('index')
})

module.exports = router