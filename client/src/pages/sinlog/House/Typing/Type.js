import React from "react";
import Typewriter from "typewriter-effect";
import Logo from "./Logo";
import "./styles/styles.css";

function Type() {
  return (
    <div className="h1 z-10 absolute">
      <Logo />
      <p className="saying">Find a perfect location </p>
      <div className="saying">
        <Typewriter
          options={{
            strings: [
              "for your Family",
              "to start your Business",
              "to go on a Vacation",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </div>
    </div>
  );
}

export default Type;
