const express = require("express");

//get supabase
const { supabase } = require("./supabase/supabase");

const { UserRouter } = require("./controllers/UserController");

//start up express
const app = express();
//use json by default
app.use(express.json());

const port = 3000;

app.use("/", UserRouter(supabase));

app.listen(port, async () => {
  console.log(`Listening on port ${port}...`);
});
