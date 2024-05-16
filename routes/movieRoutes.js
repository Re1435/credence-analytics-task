const express = require('express')
const {
  createMovieDetails,
  getMovieDetails,
  updateMovieDetails,
  deleteMovieDetails,
} = require('../controllers/movieController')
const router = express.Router()

// POST or CREATE Method

router.post('/add-movie', createMovieDetails)

// GET or READ Method

router.get('/all-movies', getMovieDetails)

// PUT or UPDATE Method

router.put('/update-movie/:id', updateMovieDetails)

// DELETE Method

router.delete('/delete-movie/:id', deleteMovieDetails)

module.exports = router
