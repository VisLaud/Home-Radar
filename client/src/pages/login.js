import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const empty = !(email !== "" && password !== "");
  const { login } = useAuth();
  const history = useHistory();
  useEffect(() => {
    document.title = "Login - Home Radar";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      history.push("/favourite");
    } catch (error) {
      setError(error.message);
      setPassword("");
    }
  };
  return (
    <div>
      <div>
        <h2>Login in</h2>
        {error && <h2>{error}</h2>}
      </div>
      <div>
        <form method="POST" onSubmit={handleSubmit}>
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
          <button
            disabled={empty}
            type="submit"
            className={`bg-blue-500 text-white w-80 rounded h-8 font-bold ${
              empty && "cursor-not-allowed opacity-50"
            }`}
          >
            Log In
          </button>
        </form>
      </div>
      <div>
        Don't have an account?{" "}
        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-600">
          Sign up
        </Link>
      </div>
    </div>
  );
}
