const mongoose = require("mongoose");

export async function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/db")
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error: any) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}
