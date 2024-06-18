const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchHistorySchema = new Schema({
    search: String,
    count: Number, 
})

const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

async function findSearchedMovie(movieName){
    const search = await SearchHistory.find({search: movieName})
    return search;
}

const searchHistoryDb = {
    findSearchedMovie
}

module.exports = searchHistoryDb; 