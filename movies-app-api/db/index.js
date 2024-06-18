const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to MongoDB...");

  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_DATABASE,
    MONGO_INITDB_PORT,
  } = process.env;

  const uri = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongodb:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`;

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
