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

app.get("/anatomy", (req, res) => {
  res.sendFile(__dirname + "/public/anatomy.html")
})

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contacts.html")
});

app.get("/pal", (req, res) => {
  res.sendFile(__dirname + "/public/pal.html")
})

app.get("/pal", (req, res) => {
  res.sendFile(__dirname + "/public/pal.html")
})

app.get("/response", (req, res) => {
  res.sendFile(__dirname + "/public/responses.html")
})

app.get("/abshyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/abshyper.html")
})

app.get("/bicephyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/bicephyper.html")
})

app.get("/chesthyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/chesthyper.html")
})

app.get("/forearmhyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/forearmhyper.html")
})

app.get("/legshyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/legshyper.html")
})

app.get("/trapshyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/trapshyper.html")
})

app.get("/tricephyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/tricephyper.html")
})

app.get("/backhyper", (req, res) => {
  res.sendFile(__dirname + "/anatomy/hypertrophyintro/backhyper.html")
})

app.get("/absendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/absendurance.html")
})

app.get("/bicependurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/bicependurance.html")
})

app.get("/trapsendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/trapsendurance.html")
})

app.get("/tricependurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/tricepndurance.html")
})

app.get("/absendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/absendurance.html")
})

app.get("/legsendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/legsendurance.html")
})

app.get("/forearmendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/forearmendurance.html")
})

app.get("/chestendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/chestendurance.html")
})

app.get("/shoulderendurance", (req, res) => {
  res.sendFile(__dirname + "/anatomy/enduranceintro/shoulderendurance.html")
})

app.get("/shoulderstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/shoulderstrength.html")
})

app.get("/absstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/absstrength.html")
})

app.get("/legsstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/legsstrength.html")
})

app.get("/cheststrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/cheststrength.html")
})

app.get("/forearmstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/forearmstrength.html")
})

app.get("/trapsstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/trapsstrength.html")
})

app.get("/bicepstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/bicepstrength.html")
})

app.get("/tricepstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/tricepstrength.html")
})

app.get("/backstrength", (req, res) => {
  res.sendFile(__dirname + "/anatomy/strengthintro/backstrength.html")
})

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

app.get('/submission', (req, res) => {
  connection.execute(submission_query, (error, results) => {
    if (error) console.log(error);
    else {
      res.send(results);
    }
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
  })
})

module.exports = app;