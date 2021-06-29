import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory, Redirect } from "react-router-dom";

export default function Favourite() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    document.title = "Favourites";
  }, []);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Welcome {currentUser.displayName} to your profile </h1>
      <Link to="/settings" className="font-bold text-blue-600">
        Account Setting
      </Link>
      <br />
      <button onClick={handleLogout} className="font-bold text-blue-600">
        Logout
      </button>
    </div>
  );
}
