const express = require("express");
const Router = express.Router;
const bcrypt = require("bcrypt");
const passport = require("passport");

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

//POST /logout
//logs out user
const LogoutUser = (supabase) =>{
  return async (req, res, next) => {
    req.logout();
    req.send("Logged out")
  }
}

//GET /isLoggedIn
const LoggedIn = () =>{
  return async (req, res, next) =>{
    res.json({loggedIn: await req.isAuthenticated()})
  }
}
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
  const router = Router();

  router.post("/signup", doesUsernameExist(supabase), SignUpUser(supabase));
  router.post(
    "/login",

    (req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          res.status(401).json({ message: "Wrong Password" });
        }
       
        if (!user) {
          res.status(401).json({ message: "Please login" });
        }

        req.login(user, function (err) {
          res.status(200).send();
        });
      })(req, res, next);
    }
  );

  router.post("/logout", LogoutUser(supabase));
  router.get("/isLoggedIn", LoggedIn);
  return router;
};

module.exports = { AuthRouter };
