import React, { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

export default function ForgotPass({ curr, forgot }) {
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
    <div className="container w-11/12  flex  justify-center">
      <div className="flex flex-col w-10/12 ">
        <div>
          <h2 className="flex  w-full font-bold text-3xl mb-3  ">
            Reset Password
          </h2>
          <p className="mb-16 text-gray-500">
            Please enter your email and we'll send you further instructions on
            reseting your password{" "}
          </p>
          {error && (
            <p className="mb-4 text-base text-red-500 font-medium">{error}</p>
          )}
          {message && (
            <p className="mb-4 text-base text-green-500 font-medium">
              {message}
            </p>
          )}
          <form method="POST" onSubmit={handleSubmit}>
            <label className="flex-col font-semibold " htmlFor="emailInput">
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
            <div className="flex flex-col items-center">
              <button
                disabled={empty}
                type="submit"
                className={`bg-pink-500 text-white w-6/12 rounded mb-3 h-9 font-bold ${
                  empty && "cursor-not-allowed opacity-50"
                }`}
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center">
            <button
              className="font-medium text-blue-600"
              onClick={() => {
                forgot(false);
                curr(true);
              }}
            >
              Back To Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
