import "../componentStyles/Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import auth from "../firebase";

const Login = () => {
  const [shown, setShow] = useState("Show");
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleShow = (e) => {
    setShow((prevShown) => (prevShown === "Show" ? "Hide" : "Show"));
    setShowPassword((prevShown) =>
      prevShown === "password" ? "text" : "password"
    );
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    handleEmailChange(e);
    handlePasswordChange(e);
  };
  return (
    <div className="loginContainer">
      <div className="loginElements">
        <p className="inpDialog">Enter your Email and password: </p>
        <form className="loginForm" onSubmit={signIn}>
          <input
            className="inpField"
            type="email"
            name="name"
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="inpField"
            type={showPassword}
            name="password"
            placeholder="1234"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>
        <div className="passwordShow">
          <input
            className="passInpShow checkBox"
            type="checkbox"
            onChange={handleShow}
          />
          <label className="passInpShow">{shown}</label>
        </div>
        <button className="submitBtn" onClick={signIn}>
          Sign Up/Sign in
        </button>
      </div>
    </div>
  );
};
export default Login;
