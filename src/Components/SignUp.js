import React from "react";
import "../Components/SignUpCSS.css";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setFormSubmitted(true);
      alert("ok");
    } else {
      alert("Password and confirmed password are not the same");
    }
    // window.location.reload();
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="wraper">
      <img src={require("../Assets/logo.png")}></img>
      <form className="form" onSubmit={(event) => handleFormSubmit(event)}>
        <input
          type="text"
          placeholder="  Username"
          value={username}
          onChange={(e) => handleUsername(e)}
        ></input>
        <input
          type="email"
          placeholder="  Email"
          value={email}
          onChange={(e) => handleEmail(e)}
        ></input>
        <input
          type="password"
          placeholder="  Password"
          value={password}
          onChange={(e) => handlePassword(e)}
        ></input>
        <input
          type="password"
          placeholder="  Confirm password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPassword(e)}
        ></input>
        <div className="checkbox">
          <input type="checkbox"></input>
          <p>
            Yes,I accept the <a href="#">Terms of use</a>
          </p>
        </div>
        <button type="submit">
          <b>Submit</b>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
