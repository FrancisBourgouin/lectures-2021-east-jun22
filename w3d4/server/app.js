const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const generateAuthenticator = require('./helpers/authentication');
const privateRouter = require('./routes/privateRouter')
const bcrypt = require('bcryptjs');


const salt = bcrypt.genSaltSync(10);


const app = express();

app.use(cookieSession({
  name: "session",
  keys: ["secretsecretIgotAsecret", "SuiteMadameBlue"]
}))

const user = {
  name: "Francis",
  email: "info@francisle.ninja",
  password: bcrypt.hashSync("lilchicken", salt),
  secret: "I once put the orange stuff of a Kraft dinner in the pasta water, forgot to drain..."
}

const user2 = {
  name: "Rebekah",
  email: "reb@kah.ca",
  password: bcrypt.hashSync("Mario2", salt),
  secret: "I like growing radishes, but I don't enjoy the way they taste."
}
// const userDatabaseIsh = [user, user2]
// for(const userObj of userDatabaseIsh){
//   if(userObj === "email"){
//     ...
//   }
// }

const userDatabaseIsh = { [user.email]: user, [user2.email]: user2 }
console.log(userDatabaseIsh)

// userDatabaseIsh[email]
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/private', privateRouter)

// REQUEST COME IN

app.use('/', generateAuthenticator(userDatabaseIsh))

app.get("/", (req, res) => {
  const templateVars = {
    error: req.cookies.error ? req.cookies.error : null
  }
  res.render("index", templateVars)
})

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password

  // Extract relevant data
  const { email, password } = req.body

  // Check data against "database"
  const passwordMatch = bcrypt.compareSync(password, userDatabaseIsh[email].password)
  if (userDatabaseIsh[email] && passwordMatch) {
    // If data matches
    // create a cookie
    res.clearCookie('error')
    req.session.email = email
    // show the vault page
    return res.redirect('/vault')
  }
  // If data doesn't match, redirect back to /
  console.log("ANGRY FAKE LOGIN RAWR")
  res.cookie(error, 'Email or Password doesnt match!')
  res.redirect('/')
})



app.get("/vault", (req, res) => {
  const userObject = userDatabaseIsh[req.session.email]
  const templateVars = {
    name: userObject ? userObject.name : "",
    secret: userObject ? userObject.secret : ""
  }
  if (userObject) {
    res.render("vault", templateVars)
  } else {
    res.redirect("/")
  }
})
// Application Programming Interface
app.get("/api/vault", (req, res) => {
  const userObject = userDatabaseIsh[req.session.email]
  const templateVars = {
    name: userObject ? userObject.name : "",
    secret: userObject ? userObject.secret : ""
  }
  if (userObject) {
    res.json(templateVars)
  } else {
    res.redirect("/")
  }
})


module.exports = app;
