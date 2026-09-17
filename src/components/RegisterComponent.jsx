import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import LinkedinLogo from "../assets/linkedinLogo.svg";
import GoogleButtonImport from "react-google-button";

const GoogleButton = GoogleButtonImport.default || GoogleButtonImport;

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      console.log(res);
      toast.success("Account Created!");
      navigate('/home');
    } catch (err) {
      console.error(err);
      toast.error("Cannot Create your Account");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate('/home');
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" alt="LinkedIn logo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>
        <div className="auth-inputs">
          <input
            className="common-input"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            type="email"
            placeholder="Email or phone number"
          />
          <input
            className="common-input"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            type="password"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={login} className="login-btn">
          Agree & Join
        </button>
        <hr className="hr-text" data-content="or" />
        <div className="google-btn-container">
          <GoogleButton className="google-btn" onClick={googleSignIn} />

          <p className="go-to-signup">
            Already on LinkedIn?{" "}
            <span className="join-now" onClick={() => navigate("/login")}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
