const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const requestLogger = require("./middlewares/requestLogger");
const moviesRouter = require("./routes/moviesRouter");
const searchHistoryRouter = require("./routes/searchHistoryRouter");
const app = express();
// Connect to MongoDB
connectDB();
const port = 3001;

app.use(cors());
app.use(express.json());
// |
// V
// we are going to log the request info
// before we move forward
app.use(requestLogger);
// |
// V
app.get("/", function (req, res) {
  res.send("API is running now...");
});
// |
// V
app.use("/movies", moviesRouter);
// |
// V
app.use("/search-history", searchHistoryRouter);
// |
// V
app.listen(port, function () {
  console.log(`Working on port ${port}`);
});
