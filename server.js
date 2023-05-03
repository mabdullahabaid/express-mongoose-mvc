const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const app = require("./app");

// Database Connection
const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then(() => console.log("Connection with DB successfully established"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// Starting Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}...`);
});
