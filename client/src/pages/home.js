import React, { useContext, useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home Radar";
  }, []);
  return (
    <div>
      <h1>The home page</h1>
    </div>
  );
}
