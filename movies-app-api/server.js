const express = require("express");
const connectDB = require("./db/index");
const cors = require("cors");
const path = require("path");
const requestLogger = require("./middlewares/requestLogger");
const moviesRouter = require("./routes/moviesRouter");
const searchHistoryRouter = require("./routes/searchHistoryRouter");

const app = express();
const port = 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(requestLogger);
app.use(cors({
	// https://movies-app-j7xn.onrender.com
    // http://localhost:3000
    origin: " http://localhost:3000", // Frontend URL goes here
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());

// Routes
app.use("/movies", moviesRouter);
app.use("/search-history", searchHistoryRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
