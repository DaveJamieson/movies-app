const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to MongoDB...");

  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_DATABASE,
    MONGO_INITDB_PORT,
    DEPLOYMENT_MONGO_INITDB_ROOT_USERNAME,
    DEPLOYMENT_MONGO_INITDB_ROOT_PASSWORD,
    NODE_ENV,
  } = process.env;

  let uri;
  NODE_ENV === "development"
    ? (uri = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongodb:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`)
    : (uri = `mongodb+srv://${DEPLOYMENT_MONGO_INITDB_ROOT_USERNAME}:${DEPLOYMENT_MONGO_INITDB_ROOT_PASSWORD}@moviesdb.bztzg1x.mongodb.net/?retryWrites=true&w=majority&appName=moviesDb`);

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
