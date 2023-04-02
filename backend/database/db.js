const mongoose = require("mongoose");

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { start };
