require("dotenv").config();


const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const path = require('path');

require("./db");
const api = require("./api/index");
const middlewares = require("./middlewares");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.get("/", (req, res) => {
  res.render("home"); 

});
   
app.get("/About", (req, res) => {
  res.render("About"); 

});

app.get("/signup", (req, res) => {
  res.render("signup"); 
});

app.post("/signup", (req, res) => {
  res.render("signup"); 
  console.log(req.body)
});

app.get("/signin", (req, res) => {
  res.render("signin"); 

});

app.post("/signin", (req, res) => {
  res.render("signin"); 
  console.log(req.body)
});

app.get("/donate", (req, res) => {
  res.render("donate"); 

});

app.post("/donate", (req, res) => {
  res.render("donate"); 
  console.log(req.body)
});

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
