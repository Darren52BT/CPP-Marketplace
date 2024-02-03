import { useState } from "react";
import "./SignUpPage.css";
import NavBar from "./NavBar";

function SignUpPage() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
    console.log(signUpData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //post sign up data to /signup

    const url = "http://localhost:3000/signup";

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
  };
  return (
    <>
    <NavBar />
      <form onSubmit={onSubmitHandler}>
        <div className="wrapper-outer">
          <div className="container-SignUpPage">
            <h1 className="user-signUp-title">Sign Up</h1>
            <div className="input-box-signUp">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleInput}
              />
            </div>
            <div className="input-box-signUp">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="signin-button">
              Sign Up
            </button>
            <a className="log-in-button" href="/login">Already a User? Log in</a>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpPage;
