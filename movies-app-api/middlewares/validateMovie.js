function validateMovie(req, res, next) {
  const bannedWords = ["fuck", "cunt"];
  const movieName = req.params.movieName;

  for (const bannedWord of bannedWords) {
    if (movieName.includes(bannedWord)) {
      return res.status(400).send("Searched movie name contains a banned word");
    }
  }

  next();
}

module.exports = validateMovie;
