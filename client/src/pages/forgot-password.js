import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import * as ROUTES from "../constants/routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const empty = !(email !== "");
  const { resetPassword } = useAuth();
  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <h2>Reset Password</h2>
        {error && <h2>{error}</h2>}
        <div>{message}</div>
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
          <button
            disabled={empty}
            type="submit"
            className={`bg-blue-500 text-white w-80 rounded h-8 font-bold ${
              empty && "cursor-not-allowed opacity-50"
            }`}
          >
            Reset Password
          </button>
          <div>
            <Link to="/login" className="font-bold text-blue-600">
              <h2>Login</h2>
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
      <div>{message}</div>
    </div>
  );
}
