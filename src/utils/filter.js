function filterMoviesByDuration (movies)  {
  return movies.filter((m) => m.duration <= 40);
}

function searchMoviesByKeyWord (movies, keyWord) {
  return movies.filter((m) => m.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
}

module.exports = {
  filterMoviesByDuration,
  searchMoviesByKeyWord,
}