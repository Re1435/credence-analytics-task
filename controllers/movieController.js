const Movie = require('../models/Movie')

// POST or CREATE Method

const createMovieDetails = async (req, res) => {
  try {
    const { name, img, summary } = req.body

    const movieDetails = new Movie({
      name,
      img,
      summary,
    })
    await movieDetails.save()

    res.status(201).json(movieDetails)
  } catch (error) {
    console.log('There is an error: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// GET or READ Method

const getMovieDetails = async (req, res) => {
  try {
    const movieDetails = await Movie.find()
    res.status(201).json(movieDetails)
  } catch (error) {
    console.log('There is an error: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// PUT or UPDATE Method

const updateMovieDetails = async (req, res) => {
  try {
    const { name, img, summary } = req.body

    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {
      name,
      img,
      summary,
    })

    if (!updateMovie) {
      return res.status(404).json({ message: 'movie details not found' })
    }

    res.status(201).json({ message: 'Movie updated successfully' })
  } catch (error) {
    console.log('There is an error: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// DELETE Method

const deleteMovieDetails = async (req, res) => {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(req.params.id)

    res.status(201).json({ message: 'Movie deleted successfully' })
  } catch (error) {
    console.log('There is an error: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  createMovieDetails,
  getMovieDetails,
  updateMovieDetails,
  deleteMovieDetails,
}
