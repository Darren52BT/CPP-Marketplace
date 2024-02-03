import { useState } from "react";
import "./SignUpPage.css";

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
    <form onSubmit={onSubmitHandler}>
      <div className="wrapper">
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInput}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="signin-button">
          SignUp
        </button>
      </div>
    </form>
  );
}

export default SignUpPage;
