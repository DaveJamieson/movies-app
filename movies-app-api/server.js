const express = require("express")
const cors = require("cors")
const requestLogger = require("./middlewares/requestLogger")
const moviesRouter = require("./routes/moviesRouter")
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
// |
// V
// we are going to log the request info
// before we move forward 
app.use(requestLogger)
// |
// V
app.get('/', function(req, res){
    res.send('API is running now...')
})
// |
// V
app.use('/movies/:movieName', async (req, res)=>{
    const movieName = req.params.movieName
    const apiKey = "d9c704de"
    const queryParams = `apiKey=${apiKey}&&s=${movieName}`
    const url = `https://www.omdbapi.com/?${queryParams}`

    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data)
})
// |
// V
app.listen(port, (function(){
    console.log(`Working on port ${port}`)
    
}))