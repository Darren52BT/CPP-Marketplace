require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
//get supabase
const { supabase } = require("./supabase/supabase");
const { AuthRouter } = require("./controllers/AuthController");
const initializePassport = require("./passport/passport-config");
//start up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//init passport
initializePassport(passport, supabase);

const port = 3000;

//use session
const pg = require("pg");
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);

app.use(
  expressSession({
    store: new pgSession({
      // // Insert connect-pg-simple options here
      conString: process.env.DB_CONNECTION,
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // Insert express-session options here
  })
);

//use passport
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res, next) => {
  console.log(req.session);
  res.send("<h1>Hello world (Sessions)</h1>");
});

app.use("/", AuthRouter(supabase));

app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});
