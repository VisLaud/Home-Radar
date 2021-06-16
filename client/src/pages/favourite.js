import React, { useContext, useEffect, useState } from "react";

export default function Favourite() {
  useEffect(() => {
    document.title = "Favourites";
  }, []);
  return (
    <div>
      <h1>Favourite</h1>
    </div>
  );
}
