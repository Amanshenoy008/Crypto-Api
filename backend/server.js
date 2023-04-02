const express = require("express");
const app = express();
const cors = require("cors");
const { start } = require("./database/db");
const path = require("path");
const { da } = require("./database/schema");
const { run } = require("./apidata/api");

start();

app.use(cors());

// Used to clear the database of any past data
da.deleteMany({})
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });

run();
app.use(express.static(path.join(__dirname, "static")));

app.use("/data", require("./routers/routes"));

app.listen(3000, () => {
  console.log("Port live on 3000");
});
