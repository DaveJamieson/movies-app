
// const express = require("express");
// const connectDB = require("./db/index");
// const cors = require("cors");
// const requestLogger = require("./middlewares/requestLogger");
// const moviesRouter = require("./routes/moviesRouter");
// const searchHistoryRouter = require("./routes/searchHistoryRouter");
// const path = require("path");
// const app = express();
// // Connect to MongoDB
// connectDB();
// const port = 3001;

// app.use(cors());
// app.use(express.json());
// // |
// // V
// // we are going to log the request info
// // before we move forward
// app.use(requestLogger);
// // |
// // V
// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "build")));
// // |
// // V
// app.get("/", function (req, res) {
//   res.send("API is running now...");
// });
// // |
// // V
// app.use("/movies", moviesRouter);
// // |
// // V
// app.use("/search-history", searchHistoryRouter);
// // |
// // V
// app.listen(port, function () {
//   console.log(`Working on port ${port}`);
// });


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
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));
app.use(
	cors({
		origin: "https://movies-app-j7xn.onrender.com", // replace with your frontend URL
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
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, function () {
	console.log(`Working on port ${port}`);
});