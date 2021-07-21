import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { currentUser, updatePassword, updateUserName, logout } = useAuth();
  const [userName, setUserName] = useState(currentUser.displayName);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    document.title = "Settings";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setConfirm("");
      setPassword("");
      return setError("Passwords do not match");
    }

    setError("");
    const promises = [];
    if (userName !== currentUser.displayName) {
      promises.push(updateUserName(userName));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/favourite");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/account");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex-col bg-purple-300 flex justify-between shadow-xl">
        <div className="flex-col">
          <div className="text-center hover:bg-purple-200 p-10">
            <Link to="/" className="font-bold text-4xl">
              Home-Radar
            </Link>
          </div>
          <div className="w-full text-center text-2xl hover:bg-purple-200 p-8 ">
            <Link to="/favourite" className="font-bold p-8">
              Favourites
            </Link>
          </div>
          <div className=" bg-purple-200 text-center p-8 shadow-md ">
            <Link to="/settings" className="font-bold text-2xl p-8">
              Account Setting
            </Link>
          </div>
        </div>
        <div className="text-center  p-8">
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-10/12 flex justify-center items-center">
        <div className="flex flex-col w-4/12">
          <div className="flex flex-col items-center">
            <h2 className="flex  w-full font-bold text-3xl mb-10 ">
              Profile Settings
            </h2>
            {error && (
              <p className="mb-4 text-base text-red-500 font-medium">{error}</p>
            )}
            <form method="POST" onSubmit={handleSubmit}>
              <label
                className="flex-col font-semibold "
                htmlFor="usernameInput"
              >
                User Name
              </label>
              <input
                id="usernameInput"
                className="text-base text-gray w-full mr-3 mb-6 mt-1 py-5 px-4 h-2 bg-gray-200 rounded-lg mb-2"
                type="text"
                value={userName}
                onChange={({ target }) => {
                  setUserName(target.value.toLowerCase());
                }}
              />
              <label
                className="flex-col font-semibold "
                htmlFor="passwordInput"
              >
                Password
              </label>
              <input
                id="passwordInput"
                className="text-base text-gray w-full mr-3 mb-6 mt-1 py-5 px-4 h-2  bg-gray-200 rounded-lg mb-2"
                type="password"
                value={password}
                placeholder="leave empty for default"
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
              <label className="flex-col font-semibold " htmlFor="confirmInput">
                Confirm Password
              </label>
              <input
                id="confirmInput"
                className="text-base text-gray w-full mr-3 mb-12  mt-1 py-5 px-4 h-2  bg-gray-200 rounded-lg mb-2"
                type="password"
                placeholder="leave empty for default"
                value={confirm}
                onChange={({ target }) => {
                  setConfirm(target.value);
                }}
              />
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className={`bg-blue-500 text-white w-80 rounded h-8 font-bold  `}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
