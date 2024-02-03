const express = require("express");

//createUser function

const setSession = (supabase) => {
  return async (req, res) => {
    const { token } = req.body;
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    // Verify magic link token and retrieve session
    const data = await supabase.auth.verifyOtp({
      token_hash: token,
      type: "email",
    });

    // if (error) {
    //   return res.status(401).json({ error: 'Invalid token.' });
    // }

    return res.json(data);
  };
};
const createUser = (supabase) => {
  return async (req, res) => {
    const { email } = req.body;
    const data = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/retrieve-session",
      },
    });
    res.send(data);
  };
};

const getSession = (supabase) => {
  return async (req, res) => {
    const data = await supabase.auth.getUser();
    console.log(data);
    res.json(data);
  };
};

const UserRouter = (supabase) => {
  const router = express.Router();

  router.post("/signup", createUser(supabase));
  router.get("/session", getSession(supabase));
  router.get("/retrieve-session", setSession(supabase));
  return router;
};

module.exports = { UserRouter };
