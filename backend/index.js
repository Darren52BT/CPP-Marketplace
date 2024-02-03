require('dotenv').config();
const express = require("express");
//get supabase
// const { supabase } = require("./supabase/supabase");

// const { UserRouter } = require("./controllers/UserController");

//start up express
const app = express();
//use json by default
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const port = 3000;


const pg = require('pg');
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);

app.use(expressSession({
  store: new pgSession({             
    // // Insert connect-pg-simple options here
    conString:process.env.DB_CONNECTION,
    createTableIfMissing:true
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  // Insert express-session options here
}));



// app.use("/", UserRouter(supabase));

app.get("/", (req, res, next) =>{
  console.log(req.session)
  res.send('<h1>Hello world (Sessions)</h1>')
})
app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});
