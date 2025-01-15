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

app.get("/playlist", (req, res) => {
  res.sendFile(__dirname + "/public/playlist.html")
})

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contacts.html")
});

app.get("/pal", (req, res) => {
  res.sendFile(__dirname + "/public/pal.html")
})

app.get("/response", (req, res) => {
  res.sendFile(__dirname + "/public/responses.html")
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html")
})

app.get("/anatomy/hypertrophyintro/abshyper", (req, res) => {
  res.sendFile(__dirname + "abshyper.html")
})

app.get("/anatomy/hypertrophyintro/bicephyper", (req, res) => {
  res.sendFile(__dirname + "bicephyper.html")
})

app.get("/anatomy/hypertrophyintro/chesthyper", (req, res) => {
  res.sendFile(__dirname + "chesthyper.html")
})

app.get("/anatomy/hypertrophyintro/forearmhyper", (req, res) => {
  res.sendFile(__dirname + "forearmhyper.html")
})

app.get("/anatomy/hypertrophyintro/legshyper", (req, res) => {
  res.sendFile(__dirname + "legshyper.html")
})

app.get("/anatomy/hypertrophyintro/trapshyper", (req, res) => {
  res.sendFile(__dirname + "trapshyper.html")
})

app.get("/anatomy/hypertrophyintro/tricephyper", (req, res) => {
  res.sendFile(__dirname + "tricephyper.html")
})

app.get("/anatomy/hypertrophyintro/backhyper", (req, res) => {
  res.sendFile(__dirname + "backhyper.html")
})

app.get("/anatomy/enduranceintro/absendurance", (req, res) => {
  res.sendFile(__dirname + "absendurance.html")
})

app.get("/anatomy/enduranceintro/bicependurance", (req, res) => {
  res.sendFile(__dirname + "bicependurance.html")
})

app.get("/anatomy/enduranceintro/trapsendurance", (req, res) => {
  res.sendFile(__dirname + "trapsendurance.html")
})

app.get("/anatomy/enduranceintro/tricependurance", (req, res) => {
  res.sendFile(__dirname + "tricependurance.html")
})

app.get("/anatomy/enduranceintro/absendurance", (req, res) => {
  res.sendFile(__dirname + "absendurance.html")
})

app.get("/anatomy/enduranceintro/legsendurance", (req, res) => {
  res.sendFile(__dirname + "legsendurance.html")
})

app.get("/anatomy/enduranceintro/forearmendurance", (req, res) => {
  res.sendFile(__dirname + "forearmendurance.html")
})

app.get("/anatomy/enduranceintro/chestendurance", (req, res) => {
  res.sendFile(__dirname + "chestendurance.html")
})

app.get("/anatomy/enduranceintro/shoulderendurance", (req, res) => {
  res.sendFile(__dirname + "shoulderendurance.html")
})

app.get("/anatomy/strengthintro/shoulderstrength", (req, res) => {
  res.sendFile(__dirname + "shoulderstrength.html")
})

app.get("/anatomy/strengthintro/absstrength", (req, res) => {
  res.sendFile(__dirname + "absstrength.html")
})

app.get("/anatomy/strengthintro/legsstrength", (req, res) => {
  res.sendFile(__dirname + "legsstrength.html")
})

app.get("/anatomy/strengthintro/cheststrength", (req, res) => {
  res.sendFile(__dirname + "cheststrength.html")
})

app.get("/anatomy/strengthintro/forearmstrength", (req, res) => {
  res.sendFile(__dirname + "forearmstrength.html")
})

app.get("/anatomy/strengthintro/trapsstrength", (req, res) => {
  res.sendFile(__dirname + "trapsstrength.html")
})

app.get("/anatomy/strengthintro/bicepstrength", (req, res) => {
  res.sendFile(__dirname + "bicepstrength.html")
})

app.get("/anatomy/strengthintro/tricepstrength", (req, res) => {
  res.sendFile(__dirname + "tricepstrength.html")
})

app.get("/anatomy/strengthintro/backstrength", (req, res) => {
  res.sendFile(__dirname + "backstrength.html")
})

app.get("/anatomy/bodtypecontfactor", (req, res) => {
  res.sendFile(__dirname + "bodytypecontfactor.html")
})

app.get("/anatomy/bodtypemyths", (req, res) => {
  res.sendFile(__dirname + "bodytypemyths.html")
})

app.get("/anatomy/bodtypemeasures", (req, res) => {
  res.sendFile(__dirname + "bodytypemeasures.html")
})

app.get("/anatomy/bodtypegenes", (req, res) => {
  res.sendFile(__dirname + "bodytypegenes.html")
})

app.get("/programs/bodybuilding", (req, res) => {
  res.sendFile(__dirname + "bodybuilding.html")
})

app.get("/programs/soccer", (req, res) => {
  res.sendFile(__dirname + "soccer.html")
})

app.get("/programs/strongman", (req, res) => {
  res.sendFile(__dirname + "strongman.html")
})

app.get("/programs/running", (req, res) => {
  res.sendFile(__dirname + "running.html")
})

app.get("/programs/basketball", (req, res) => {
  res.sendFile(__dirname + "basketball.html")
})

app.get("/programs/football", (req, res) => {
  res.sendFile(__dirname + "football.html")
})

app.get("/programs/wrestling", (req, res) => {
  res.sendFile(__dirname + "wrestling.html")
})

app.get("/programs/calisthenics", (req, res) => {
  res.sendFile(__dirname + "calisthenics.html")
})

app.get("/programs/general", (req, res) => {
  res.sendFile(_dirname + "general.html")
})

app.get("/programs/diet", (req, res) => {
  res.sendFile(__dirname + "diet.html")
})

const register_query  = "INSERT INTO user (username, password) VALUES (?,?) ";

app.post("/register", (req, res)=> {
  connection.execute(register_query, [req.body.username, req.body.password], (error, results) => {
    if(error) console.log(error)
    else {
      res.redirect("/register");
    }
  })
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