import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { registerUser } from "../../services/requests";

export default function Signin({ curr }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  const isInvalid =
    password === "" || email === "" || userName === "" || confirm === "";

  useEffect(() => {
    document.title = "Signup - Home Radar";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      await signup(email, password, userName);
      await registerUser({ email });
      history.push("/favourite");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container w-11/12  flex justify-center">
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col items-center">
          <h2 className="flex w-full font-bold text-3xl mb-20 ">
            Signup to Home-Radar
          </h2>
          {error && (
            <p className="mb-4 text-base text-red-500 font-medium">{error}</p>
          )}
          <form method="POST" onSubmit={handleSubmit}>
            <label className="flex-col font-semibold " htmlFor="usernameInput">
              User Name
            </label>
            <input
              className="text-base text-gray w-full mr-3 mb-6 mt-1 py-5 px-4 h-2 bg-gray-200 rounded-lg mb-2"
              id="usernameInput"
              type="text"
              value={userName}
              onChange={({ target }) => {
                setUserName(target.value.toLowerCase());
              }}
            />
            <label className="flex-col font-semibold" htmlFor="emailInput">
              Email
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
              className="text-base text-gray w-full mr-3 mb-6  mt-1 py-5 px-4 h-2  bg-gray-200 rounded-lg mb-2"
              id="passwordInput"
              type="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <label className="flex-col font-semibold" htmlFor="confirmInput">
              Confirm Password
            </label>
            <input
              className="text-base text-gray w-full mr-3 mb-12  mt-1 py-5 px-4 h-2  bg-gray-200 rounded-lg mb-2"
              id="confirmInput"
              type="password"
              value={confirm}
              onChange={({ target }) => {
                setConfirm(target.value);
              }}
            />
            <div className="flex flex-col items-center">
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-pink-500 text-white w-6/12 rounded mb-6 h-9 font-bold ${
                  isInvalid && "cursor-not-allowed opacity-50"
                }`}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            Already Have An Account?{" "}
            <button
              className="font-medium text-blue-600"
              onClick={() => curr(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
