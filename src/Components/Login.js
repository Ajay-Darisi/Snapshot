import { React, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Images/SNAPLOGO.png";
import Icon from "../Images/Icon.png";
import "./login.css";

function Login() {
  const auth = getAuth();
  let navigate = useNavigate();
  const [message, setMessage] = useState("Enter Credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    setMessage("Loading...")
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        setEmail("");
        setPassword("");
        setMessage("Logging in");
        navigate("/");
      })
      .catch((error) => {
        // Error Handling
        const errorCode = error.code;
        setMessage(errorCode.split("/")[1]);
      });
  };

  const handleKeypress = (e) => {
    //It triggers by pressing the enter key
    if (e.code === "Enter") {
      Submit();
    }
  };

  const forgotPassword = () => {
    const result = window.prompt("Enter your Email:");
    if (result) {
      sendPasswordResetEmail(auth, result)
        .then(() => {
          // Password reset email sent!
          console.log("Mail sent");
          alert("Reset link sent to your Email");
          //   setMessage("Reset mail sent");
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    }
  };

  return (
    <div className="main">
      <div className="leftDiv">
        <div className="leftInner">
          <div className="title">
            <div className="image">
              <img
                src={Icon}
                alt="Icon"
                width="150"
                height="150"
                className="icon"
              />
            </div>
            <div className="titleInner">
              <div className="welcome">
                <h1>Welcome to</h1>
              </div>
              <div>
                <h1 className="snapshots">Snapshots</h1>
              </div>
            </div>
          </div>
          <div className="caption">
            <h1>Upload your Best Snaps here!</h1>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <div className="rightInner">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              width="90"
              height="90"
              className="snaplogo"
            />
            <p className="lou">Login to Upload</p>
          </div>
          <div className="credentials">
            <p>{message}</p>
            <input
              type="text"
              name="name"
              className="in1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              name="name"
              className="in1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyPress={handleKeypress}
            />
            <br />
            <button className="submit" onClick={Submit}>
              <span className="login">Login</span>
            </button>
            <p className="forgotPassword" onClick={forgotPassword}>
              Forgot Password?
            </p>
            <p>
              New User? &nbsp;
              <Link to="/register">
                <span className="register">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
