import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import * as ROUTES from "../constants/routes";

export default function Settings() {
  const { currentUser, updatePassword, updateEmail, updateUserName } =
    useAuth();
  const [userName, setUserName] = useState(currentUser.displayName);
  const [email, setEmail] = useState(currentUser.email);
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
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
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
  return (
    <div>
      <div>
        <h2>Update Your Profile</h2>
        {error && <h2>{error}</h2>}
      </div>
      <div>
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="usernameInput">User Name: </label>
          <input
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={({ target }) => {
              setUserName(target.value.toLowerCase());
            }}
          />
          <label htmlFor="emailInput">Email: </label>
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
            value={password}
            placeholder="leave empty for default"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <label htmlFor="confirmInput">Confirm Password</label>
          <input
            id="confirmInput"
            type="password"
            placeholder="leave empty for default"
            value={confirm}
            onChange={({ target }) => {
              setConfirm(target.value);
            }}
          />
          <br />
          <button
            type="submit"
            className={`bg-blue-500 text-white w-80 rounded h-8 font-bold  `}
          >
            Update
          </button>
        </form>
      </div>
      <div>
        <Link to={ROUTES.FAVOURITE} className="font-bold text-blue-600">
          Cancel
        </Link>
      </div>
    </div>
  );
}
