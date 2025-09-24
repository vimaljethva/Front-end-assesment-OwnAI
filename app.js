const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware to handle form data n stuff
app.use(bodyParser.urlencoded({ extended: true }));

// serving up anything in public folder (css/js/images etc)
app.use(express.static(path.join(__dirname, "public")));

// using ejs cause we like templates instead of plain html
app.set("view engine", "ejs");

// main route -> load form page
app.get("/", (req, res) => {
  res.render("form");
});

// submit route where form posts will end up
app.post("/submit", (req, res) => {
  console.log("Form Submission:", req.body);
  // passing data back so page can show the submitted details
  res.render("form", { submittedData: req.body });
});

// spin up the server
app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);