import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import Model from "./components/Model";

function House() {
  return (
    <Canvas
      shadows
      style={{ background: "#CBC3E3" }}
      camera={{ position: [10, 8, 10] }}
    >
      <Lights />
      <Model />
    </Canvas>
  );
}

export default House;
