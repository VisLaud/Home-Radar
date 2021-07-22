import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import Bookmark from "./Bookmark";

export default function Favourite() {
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    document.title = "Bookmarks";
    axios(
      `https://home-radar.herokuapp.com/profiles?email=${currentUser.email}`
    ).then((res) => {
      setLocation(res.data[0].bookmark);
    });
  }, []);

  console.log(location);

  const renderLocation = () => {
    if (location) {
      if (location.length === 0) {
        return <h1>Empty</h1>;
      } else {
        return location.map((loc, index) => (
          <Bookmark name={"1400 the woods drive"} city={"San Jose"} />
        ));
      }
    } else return <Skeleton count={8} width={320} height={400} />;
  };

  // location ? (
  //   <Skeleton count={1} width={320} height={400} />
  // ) : location.length === 0 ? (
  //   <h1>Empty</h1>
  // ) : (
  //   location.map((loc, index) => (
  //     <Bookmark name={"1400 the woods drive"} city={"San Jose"} />
  //   ))
  // );

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="flex w-screen h-screen ">
      <div className="flex-1 flex-col bg-purple-300 flex justify-between shadow-xl">
        <div className="flex-col">
          <div className="text-center hover:bg-purple-200 p-10">
            <Link to="/" className="font-bold text-4xl">
              Home-Radar
            </Link>
          </div>
          <div className="w-full text-center text-2xl bg-purple-200 p-8 shadow-md">
            <Link to="/favourite" className="font-bold p-8">
              Bookmarks
            </Link>
          </div>
          <div className=" hover:bg-purple-200 text-center p-8 ">
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
      <div className="w-10/12 p-10">
        <div className="text-2xl mb-10 text-center w-auto">
          <h1>
            welcome {currentUser.displayName.toUpperCase()} to your profile{" "}
          </h1>
        </div>
        <div className="text-2xl font-medium ">
          <h1>Bookmark</h1>
        </div>
        <div className="text-2xl bg-yellow-50 w-full text-center text-gray-400 font-mono">
          {"Empty"}
        </div>
      </div>
    </div>
  );
}
