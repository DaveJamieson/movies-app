const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchHistorySchema = new Schema({
    Search: String,
    Count: Number, 
})

const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

async function findSearchedMovie(movieID){
    const search = await SearchHistory.find({search: movieID})
    return search;
}

const searchHistoryDb = {
    findSearchedMovie
}

module.exports = searchHistoryDb; 