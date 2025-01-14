var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var connection = require('./database/db_connection');
const { error } = require('console');

// view engine setup
app.set('views', path.join(__dirname, 'public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public/img"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/start.html")
});


app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/aboutus.html")
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contacts.html")
});

const contact_query = `INSERT INTO question (name, email, question) VALUES (?, ?, ?);`

app.post("/contact", (req, res) => {
  connection.execute(contact_query, [req.body.name, req.body.email, req.body.question], (error, results) => {
    if(error) console.log(error)
    else {
      res.redirect("/contact");
    }
  })
})

const submission_query = "SELECT * FROM question"

app.get('/responses', (req, res) => {
  connection.execute(submission_query, (error, results) => {
    if (error) console.log(error);
    else {
      res.send(results);
    }
  })
})

app.post("/responses", (req, res) => {
  const { name, email, question } = req.body
  const response = createSubmission(name, email, question)
  res.send(response)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
  })
})

module.exports = app;