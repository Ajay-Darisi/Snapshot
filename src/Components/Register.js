import React from "react";
import { Link } from "react-router-dom";
import "./Redirect.css";
import Icon from "../Images/Icon.png";
import "./login.css";

function Register() {
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
        <div className="rightInner1">
          <h1 className="LoginToView">Registrations are only for VIP'S</h1>
          <Link to="/">
            <p className="loginbutton">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
