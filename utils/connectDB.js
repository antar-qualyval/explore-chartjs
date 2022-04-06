const mongoose = require("mongoose");

const connectDB = () => {
  let success = false;
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Connected to database successfully!");
      success = true;
    })
    .catch((err) => {
      console.error(err.message);
      success = false;
    });

    return success;
};
module.exports = connectDB;
