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
app.use('/:movieName', moviesRouter)
// |
// V
app.listen(port, (function(){
    console.log(`Working on port ${port}`)
}))