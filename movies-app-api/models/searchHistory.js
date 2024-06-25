const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchHistorySchema = new Schema({
    imdb_ID: { type: String, },
    movie_name: { type: String, },
    search_count: { type: Number, default: 1 },
});

const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

async function findSearchedMovie(movieID) {
    const search = await SearchHistory.findOne({ imdb_ID: movieID });
    return search;
}

const searchHistoryDb = {
    findSearchedMovie,
    SearchHistory
};

module.exports = searchHistoryDb;
