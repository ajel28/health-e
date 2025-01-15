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

app.get("/pal", (req, res) => {
  res.sendFile(__dirname + "/public/pal.html")
})

app.get("/response", (req, res) => {
  res.sendFile(__dirname + "/public/responses.html")
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html")
})

const register_query  = "INSERT INTO user (user_id, password) VALUES (?,?) ";

app.post("/register", (req, res)=> {
  console.log(req)
  connection.execute(register_query, [req.body.username, req.body.password], (error, results) => {
    if(error) console.log(error)
    else {
      res.redirect("/login");
    }
  })
})




app.get("/anatomy/hypertrophyintro/abshyper.html", (req, res) => {
  res.sendFile(__dirname + "abshyper.html")
})

app.get("/anatomy/hypertrophyintro/bicephyper.html", (req, res) => {
  res.sendFile(__dirname + "bicephyper.html")
})

app.get("/anatomy/hypertrophyintro/chesthyper.html", (req, res) => {
  res.sendFile(__dirname + "chesthyper.html")
})

app.get("/anatomy/hypertrophyintro/forearmhyper.html", (req, res) => {
  res.sendFile(__dirname + "forearmhyper.html")
})

app.get("/anatomy/hypertrophyintro/legshyper.html", (req, res) => {
  res.sendFile(__dirname + "legshyper.html")
})

app.get("/anatomy/hypertrophyintro/trapshyper.html", (req, res) => {
  res.sendFile(__dirname + "trapshyper.html")
})

app.get("/anatomy/hypertrophyintro/tricephyper.html", (req, res) => {
  res.sendFile(__dirname + "tricephyper.html")
})

app.get("/anatomy/hypertrophyintro/backhyper.html", (req, res) => {
  res.sendFile(__dirname + "backhyper.html")
})

app.get("/anatomy/enduranceintro/absendurance.html", (req, res) => {
  res.sendFile(__dirname + "absendurance.html")
})

app.get("/anatomy/enduranceintro/bicependurance.html", (req, res) => {
  res.sendFile(__dirname + "bicependurance.html")
})

app.get("/anatomy/enduranceintro/trapsendurance.html", (req, res) => {
  res.sendFile(__dirname + "trapsendurance.html")
})

app.get("/anatomy/enduranceintro/tricependurance.html", (req, res) => {
  res.sendFile(__dirname + "tricependurance.html")
})

app.get("/anatomy/enduranceintro/absendurance.html", (req, res) => {
  res.sendFile(__dirname + "absendurance.html")
})

app.get("/anatomy/enduranceintro/legsendurance.html", (req, res) => {
  res.sendFile(__dirname + "legsendurance.html")
})

app.get("/anatomy/enduranceintro/forearmendurance.html", (req, res) => {
  res.sendFile(__dirname + "forearmendurance.html")
})

app.get("/anatomy/enduranceintro/chestendurance.html", (req, res) => {
  res.sendFile(__dirname + "chestendurance.html")
})

app.get("/anatomy/enduranceintro/shoulderendurance.html", (req, res) => {
  res.sendFile(__dirname + "shoulderendurance.html")
})

app.get("/anatomy/strengthintro/shoulderstrength.html", (req, res) => {
  res.sendFile(__dirname + "shoulderstrength.html")
})

app.get("/anatomy/strengthintro/absstrength.html", (req, res) => {
  res.sendFile(__dirname + "absstrength.html")
})

app.get("/anatomy/strengthintro/legsstrength.html", (req, res) => {
  res.sendFile(__dirname + "legsstrength.html")
})

app.get("/anatomy/strengthintro/cheststrength.html", (req, res) => {
  res.sendFile(__dirname + "cheststrength.html")
})

app.get("/anatomy/strengthintro/forearmstrength.html", (req, res) => {
  res.sendFile(__dirname + "forearmstrength.html")
})

app.get("/anatomy/strengthintro/trapsstrength.html", (req, res) => {
  res.sendFile(__dirname + "trapsstrength.html")
})

app.get("/anatomy/strengthintro/bicepstrength.html", (req, res) => {
  res.sendFile(__dirname + "bicepstrength.html")
})

app.get("/anatomy/strengthintro/tricepstrength.html", (req, res) => {
  res.sendFile(__dirname + "tricepstrength.html")
})

app.get("/anatomy/strengthintro/backstrength.html", (req, res) => {
  res.sendFile(__dirname + "backstrength.html")
})

app.get("/anatomy/bodtypecontfactor.html", (req, res) => {
  res.sendFile(__dirname + "bodytypecontfactor.html")
})

app.get("/anatomy/bodtypemyths.html", (req, res) => {
  res.sendFile(__dirname + "bodytypemyths.html")
})

app.get("/anatomy/bodtypemeasures.html", (req, res) => {
  res.sendFile(__dirname + "bodytypemeasures.html")
})

app.get("/anatomy/bodtypegenes.html", (req, res) => {
  res.sendFile(__dirname + "bodytypegenes.html")
})

app.get("/programs/bodybuilding.html", (req, res) => {
  res.sendFile(__dirname + "bodybuilding.html")
})

app.get("/programs/soccer.html", (req, res) => {
  res.sendFile(__dirname + "soccer.html")
})

app.get("/programs/strongman.html", (req, res) => {
  res.sendFile(__dirname + "strongman.html")
})

app.get("/programs/running.html", (req, res) => {
  res.sendFile(__dirname + "running.html")
})

app.get("/programs/basketball.html", (req, res) => {
  res.sendFile(__dirname + "basketball.html")
})

app.get("/programs/football.html", (req, res) => {
  res.sendFile(__dirname + "football.html")
})

app.get("/programs/wrestling.html", (req, res) => {
  res.sendFile(__dirname + "wrestling.html")
})

app.get("/programs/calisthenics.html", (req, res) => {
  res.sendFile(__dirname + "calisthenics.html")
})

app.get("/programs/general.html", (req, res) => {
  res.sendFile(_dirname + "general.html")
})

app.get("/programs/diet.html", (req, res) => {
  res.sendFile(__dirname + "diet.html")
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