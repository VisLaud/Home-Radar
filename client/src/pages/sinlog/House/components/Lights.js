import React from "react";
import Bulb from "./Bulb";

const Lights = ({}) => {
  return (
    <React.Fragment>
      <ambientLight intensity={0.6} />
      <directionalLight
        // shadow-mapSize-height={2**10}
        // shadow-mapSize-width={2**10}
        // shadow-radius={10}
        intensity={0.8}
        position={[6, 3, 0]}
        // castShadow
      />
    </React.Fragment>
  );
};

export default Lights;
