import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as ROUTES from "../../constants/routes";

export default function Login({ curr, forgot }) {
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
    <div className="container w-11/12  flex  justify-center">
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col items-center">
          <h2 className="flex  w-full font-bold text-3xl mb-20 ">
            Login to Home-Radar
          </h2>
          {error && (
            <p className="mb-4 text-base text-red-500 font-medium">{error}</p>
          )}
          <form method="POST" onSubmit={handleSubmit}>
            <label className="flex-col font-semibold " htmlFor="emailInput">
              Email Address
            </label>
            <input
              className="text-base text-gray w-full mr-3 mb-6 mt-1 py-5 px-4 h-2 bg-gray-200 rounded-lg mb-2"
              id="emailInput"
              type="text"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value.toLowerCase());
              }}
            />
            <label className="flex-col font-semibold" htmlFor="passwordInput">
              Password
            </label>
            <input
              className="text-base text-gray w-full mr-3 mb-12  mt-1 py-5 px-4 h-2  bg-gray-200 rounded-lg mb-2"
              id="passwordInput"
              type="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <div className="flex flex-col items-center">
              <button
                disabled={empty}
                type="submit"
                className={`bg-pink-500 text-white w-6/12 rounded mb-6 h-9 font-bold ${
                  empty && "cursor-not-allowed opacity-50"
                }`}
              >
                Log In
              </button>
            </div>

            <div className="flex flex-col items-center">
              <button
                className="font-medium text-blue-600"
                onClick={() => forgot(true)}
              >
                <h2>Forgot Password?</h2>
              </button>
            </div>
          </form>
          <div>
            Don't have an account?{" "}
            <button
              className="font-medium text-blue-600"
              onClick={() => curr(false)}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
