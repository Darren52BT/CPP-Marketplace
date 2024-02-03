const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, supabase) {
  const getUserByUsername = async (username) => {
    return await supabase
      .from("Users")
      .select()
      .eq("username", username)
      .limit(1)
      .single();
  };

  const getUserById = async (id) => {
    return await supabase.from("Users").select().eq("id", id).limit(1).single();
  };

  const authUser = async (username, password, done) => {
    const { data: user } = await getUserByUsername(username);

    if (!user) {
      return done(null, false, {
        message: "No such user with this username",
      });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy(authUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;
