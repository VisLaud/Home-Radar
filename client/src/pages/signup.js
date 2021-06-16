import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const isInvalid =
    password === "" || email === "" || userName === "" || confirm === "";

  useEffect(() => {
    document.title = "Signup - Home Radar";
  }, []);

  const handleSignUp = () => {};

  return (
    <div>
      <div>
        <h2>SignUp</h2>
      </div>
      <div>
        <form method="POST">
          <label htmlFor="usernameInput">User Name</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={({ target }) => {
              setUserName(target.value.toLowerCase());
            }}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value.toLowerCase());
            }}
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <label htmlFor="confirmInput">Confirm Password</label>
          <input
            id="confirmInput"
            type="password"
            placeholder="confirm password"
            value={confirm}
            onChange={({ target }) => {
              setConfirm(target.value);
            }}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-500 text-white w-80 rounded h-8 font-bold ${
              isInvalid && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div>
        Already have an account?{" "}
        <Link to={ROUTES.LOGIN} className="font-bold text-blue-600">
          Login
        </Link>
      </div>
    </div>
  );
}
