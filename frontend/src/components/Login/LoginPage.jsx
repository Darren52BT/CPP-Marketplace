import { useState } from "react";
import "./LoginPage.css";
import NavBar from "./NavBar";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //post login data to /login
    const url = "http://localhost:3000/login";

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
  };
  return (
    <>
    <form onSubmit={onSubmitHandler}>
      <div className="wrapper-outer">
        <div className="container-loginPage">
          <h1 className="user-login-title">User Login</h1>
          <div className="input-box-login">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInput}
            />
          </div>
          <div className="input-box-login">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <a className="sign-up-button" href="/signup">Sign Up! Create an Account</a>
        </div>
      </div>
    </form>
    </>
  );
}

export default LoginPage;
