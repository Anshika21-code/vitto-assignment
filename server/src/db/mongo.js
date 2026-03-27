const mongoose = require("mongoose");

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB Connected");
};

module.exports = connectMongo;