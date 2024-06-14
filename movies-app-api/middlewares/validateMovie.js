function validateMovie(req, res, next) {
  const bannedWords = ["cunt"];
  const movieName = req.params.movieName;

  for (const bannedWord of bannedWords) {
    if (movieName.includes(bannedWord)) {
      // 400 Bad Request ??? The request itself is ok
      return res.status(400).send("Searched movie name contains a banned word");
    }
  }

  next();
}

module.exports = validateMovie;
