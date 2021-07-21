import React from "react";

const Lights = () => {
  return (
    <React.Fragment>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} position={[6, 3, 0]} />
    </React.Fragment>
  );
};

export default Lights;
