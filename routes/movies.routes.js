// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require('../models/Movie.model')
const Celeb = require('../models/celeb.model')


// all your routes here
router.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((allMovies)=>{
        res.render('movies/movies.hbs', {allMovies})
    })
    .catch(()=>{
        console.log('find failed')
    })
})
router.get('/movies/create', (req, res, next)=>{
    Celeb.find()
    .then((allCelebrities)=>{
        res.render('movies/new-movie.hbs', {allCelebrities})
    })
    .catch(()=>{
        console.log('it failed')
    })
})
router.post('/movies/create', (req, res, next)=>{
    const {title, genre, plot, cast} = req.body
    Movie.create({title, genre, plot, cast})
    .then((data)=>{
        res.redirect('/movies')
    })
    .catch(()=>{
        res.redirect('/movies/new-movie')
    })
})
router.get('/movies/:id', (req, res, next)=>{
    const {id} = req.params

    Movie.findById(id)
    .populate('cast')
    .then((data)=>{
        res.render('movies/movie-details.hbs', {data})
    })
    .catch(()=>{
        console.log('find failed')
    })
})
router.get('/movies/:id/edit', (req, res, next) => {
    const { id } = req.params 
    Movie.findById(id)
    .then( (data) => {
      res.render('movies/edit-movie.hbs', {data})
    })
    .catch(()=>{
        console.log('failed noob')
    })
})
   router.post('/movies/:id/edit', (req, res, next) => { 
    const { id } = req.params 
    const { title, genre, plot, cast } = req.body 
    Movie.findByIdAndUpdate(id, { title, genre, plot, cast })
    .then( (data) => {
      res.redirect('/movies/:id')
    })
    .catch( (err) => console.log(err));
  })


router.post('/movies/:id/delete', (req, res, next) => {
    const { id } = req.params 
    Movie.findByIdAndDelete(id)
    .then( (data) => {
      res.redirect('/movies')
    })
    .catch( () => {
        console.log('fail');
  })
})
module.exports = router;