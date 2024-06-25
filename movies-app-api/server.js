const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const requestLogger = require("./middlewares/requestLogger");
const moviesRouter = require("./routes/moviesRouter");
const searchHistoryRouter = require("./routes/searchHistoryRouter");
const app = express();
const path = require("path");

// Connect to MongoDB
connectDB();
const port = 3001;

// we are going to log the request info
// before we move forward
app.use(requestLogger);

app.use(
	cors({
		// frontend url goes here
		origin: " https://movies-app-j7xn.onrender.com",
		// https://movies-app-j7xn.onrender.com
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);
app.use(express.json());
// |
// V
app.use("/movies", moviesRouter);
// |
// V
app.use("/search-history", searchHistoryRouter);
// |
// V
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, function () {
	console.log(`Working on port ${port}`);
});