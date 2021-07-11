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
    <div className="flex bg-blue-400 w-screen h-screen ">
      <div className="flex-1 bg-yellow-300 ">
        <h1>Image</h1>
      </div>
      <div className="w-4/12 bg-white flex container">
        <div>
          <h2 className="flex-col">Login in</h2>
          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
          <div className="flex-col">
            <form method="POST" onSubmit={handleSubmit}>
              <label htmlFor="emailInput">Email</label>
              <input
                className="text-sm text-gray w-4/12 mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
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
              <div>
                <Link to="/forgot-password" className="font-bold text-blue-600">
                  <h2>Forgot Password?</h2>
                </Link>
              </div>
            </form>
          </div>
          <div>
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-600">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
