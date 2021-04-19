// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celeb = require('../models/celeb.model')


// all your routes here
router.get('/celebrities', (req, res, next)=>{
    Celeb.find()
    .then((allCelebs)=>{
        res.render('celebrities/celebrities.hbs', {allCelebs})
    })
    .catch(()=>{
        console.log('find failed')
    })
})


router.get('/celebrities/create', (req, res, next)=>{
    res.render('celebrities/new-celebrity.hbs')
})

router.post('/celebrities/create', (req, res, next)=>{
    const {name, occupation, catchPhrase} = req.body
    console.log(name)
    Celeb.create({name, occupation, catchPhrase})
    .then((data)=>{
        res.redirect('/celebrities')
    })
    .catch(()=>{
        res.redirect('/celebrities/new-celebrity')
    })
})


module.exports = router;