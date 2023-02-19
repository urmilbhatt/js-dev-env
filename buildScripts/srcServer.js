/* This file will configure our web server that will serve up the
 *  files in our src directory
 */

// module from node.js (internal packages)
const path = require("node:path");

// external packages
const express = require("express");
const open = require("open");

const PORT = 3000;

// create instance of express
const app = express();

// routes which express will handle
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// listen request on this on this PORT
app.listen(PORT, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port: http://localhost:${PORT}`);
    open(`http://localhost:${PORT}`);
  }
});
