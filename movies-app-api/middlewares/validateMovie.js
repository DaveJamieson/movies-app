function validateMovie(req, res, next) {
  const bannedWords = ["dumb", "ass", "crap", "craped"]
    const movieName = req.params.movieName
  
    bannedWords.forEach(bannedWord => {
      if (movieName.includes(bannedWord)) {
        res.status(400).send("Movie name contains banned word")
      }
    })

    next()
}

module.exports = validateMovie