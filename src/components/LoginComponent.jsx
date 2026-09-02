import React, { useState } from "react";
import { LoginAPI, RegisterAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});

  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>LoginComponent</h1>
      <div className="auth-inputs">
        <input
          className="common-input"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="common-input"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          type="password"
          placeholder="Enter your Password"
        />
      </div>
      <button onClick={register} className="login-btn">
        Register
      </button>
      <button onClick={login} className="login-btn">
        Log IN to LinkedIn
      </button>
    </div>
  );
}
