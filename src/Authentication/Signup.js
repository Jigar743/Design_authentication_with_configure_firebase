import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { SignupUser } from "../Reducer/Auth/auth";
import "../style/Signup.css";

export default function Signin() {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupUser(name, mobileNo, email, password));
    setName("");
    setMobileNo("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      history.push("/login");
    }, 1000 * 10);
  };

  return (
    <>
      <div className="signup">
        <div className="header">
          <p>SignUp</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Enter Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="mobileno">
            <label htmlFor="mobile_no">Enter Phone No :</label>
            <input
              type="text"
              id="mobile_no"
              name="mo_number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Enter Mobile No"
            />
          </div>
          <div className="email">
            <label htmlFor="emailId">Enter Email :</label>
            <input
              id="emailId"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              name="email"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Enter Password :</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              name="password"
            />
          </div>
          <button type="submit" className="signup_btn">
            SignUp
          </button>
        </form>
      </div>
      <div className="login_page_link">
        <p>
          Already Have An Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}
