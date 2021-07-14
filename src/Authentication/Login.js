import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { LoginUser } from "../Reducer/Auth/auth";
import "../style/Login.css";

export default function Login() {
  const Login_Err = useSelector((state) => state.reducer.login_err);
  const isAuthenticated = useSelector((state) => state.reducer.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
    setEmail("");
    setPassword("");
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <div className="login">
          {Login_Err && (
            <div className="error_block">
              <p>{Login_Err}</p>
            </div>
          )}
          <div className="header">
            <p>Login</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="emailId">Enter Email :</label>
              <input
                id="emailId"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Enter Password :</label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login_btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="signup_page_link">
          <p>
            Don't Have Account? <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </>
    );
  }
}
