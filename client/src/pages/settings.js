import React, { useContext, useEffect, useState } from "react";
export default function Settings() {
  useEffect(() => {
    document.title = "Settings";
  }, []);
  return (
    <div>
      <h1>Setting</h1>
    </div>
  );
}
