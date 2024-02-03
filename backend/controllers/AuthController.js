const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");

//POST /signup
//retrieves user registration username/password, hashes password
const SignUpUser = (supabase) => {
  return async (req, res, next) => {
    //retrieve username, passworld
    const { username, password } = req.body;
    //hash password
    let hashedPassword = await bcrypt.hash(password, 10);
    //insert combination into Users table
    const { error } = await supabase
      .from("Users")
      .insert({ username: username, password: hashedPassword });

    if (error) {
      res.status(400).json();
    } else {
      res.status(201).json({ message: "success" });
    }
  };
};

//POST /login
//retrieves username/password, checks to see if legit

const LoginUser = (supabase) => {
  return async (req, res, next) => {
    //retrieve username, passworld
    const { username, password } = req.body;

    //retrieve user with username
    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("username", username)
      .limit(1)
      .single();

    //compare passwords
    const passwordsMatch = await bcrypt.compare(
      password,
      data.password ? data.password : ""
    );
    res.json({ isLoggedIn: passwordsMatch });
  };
};
//Error handling

//sends error if username exists already
const doesUsernameExist = (supabase) => {
  return async (req, res, next) => {
    //retrieve username
    const { username } = req.body;

    //retrieve user with username
    const { data, error } = await supabase
      .from("Users")
      .select()
      .eq("username", username)
      .limit(1)
      .single();

    //if it exists already, send error, otherwise move on
    if (data) {
      res.status(400).json({ message: "User Already Exists" });
      return;
    } else {
      next();
    }
  };
};

const AuthRouter = (supabase) => {
  const router = express.Router();

  router.post("/signup", doesUsernameExist(supabase), SignUpUser(supabase));
  router.post("/login", LoginUser(supabase));
  return router;
};

module.exports = { AuthRouter };
