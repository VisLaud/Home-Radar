import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookmark({ name, city }) {
  const [image, setImage] = useState();

  function randomColor() {
    var colors = [
      "#CB3301",
      "#FF0066",
      "#FF6666",
      "#FEFF99",
      "#FFFF67",
      "#CCFF66",
      "#99FE00",
      "#EC8EED",
      "#FF99CB",
      "#FE349A",
      "#CC99FE",
      "#6599FF",
      "#03CDFF",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=DT97VCmrOJy5IckTn3DCPxJoI31qtEW94ZjZ8JqYIFc&query=${city}`
      )
      .then((res) => {
        if (res.data.results.length === 0) {
          axios
            .get(
              `https://api.unsplash.com/photos/random?client_id=DT97VCmrOJy5IckTn3DCPxJoI31qtEW94ZjZ8JqYIFc&count=30&query=forest`
            )
            .then((res) =>
              setImage(res.data[Math.floor(Math.random() * 30)].urls.regular)
            );
        } else
          setImage(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length)
            ].urls.regular
          );
      });
  }, []);

  return (
    <div
      className="shadow-lg rounded-md mb-5 w-2/4 h-36 pt-8 "
      style={{
        backgroundImage: `url(${image})`,
        opacity: 1,
        color: `${randomColor()}`,
      }}
    >
      <div className=" mb-3 ">{name}</div>
      <div className="font-medium text-lg ">{city}</div>
    </div>
  );
}

export default Bookmark;

/*
<div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <img className="z-0 h-full w-full" src={`${image}`} alt="" />
          <div className="flex flex-col text-center md:text-left">
            <div className="font-medium text-lg text-gray-800">{name}</div>
            <div className="text-gray-500 mb-3 whitespace-nowrap">{city}</div>
          </div>
        </div>
      </div>
      */
