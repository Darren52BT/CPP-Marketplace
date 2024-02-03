require("dotenv").config();
const express = require("express");
const cors = require("cors");
//get supabase
const { supabase } = require("./supabase/supabase");
const { AuthRouter } = require("./controllers/AuthController");

//start up express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = 3000;

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

app.get("/", (req, res, next) => {
  console.log(req.session);
  res.send("<h1>Hello world (Sessions)</h1>");
});

app.use("/", AuthRouter(supabase));

app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});

