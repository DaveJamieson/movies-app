const express = require('express');
const router = express.Router();
const { SearchHistory } = require('../models/searchHistory');

// Log search
router.post('/log', async (req, res) => {
    const { imdb_ID, movie_name } = req.body;

    try {
        let searchEntry = await SearchHistory.findOne({ imdb_ID });
        if (searchEntry) {
            searchEntry.search_count += 1;
        } else {
            searchEntry = new SearchHistory({ imdb_ID, movie_name });
        }
        await searchEntry.save(); // Save the updated or new entry
        res.status(200).send(searchEntry);
    } catch (err) {
        console.error('Error logging search:', err);
        res.status(500).send(err);
    }
});


// Fetch search history
router.get('/', async (req, res) => {
    try {
        const history = await SearchHistory.find().sort({ search_count: -1 });
        res.status(200).send(history);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
