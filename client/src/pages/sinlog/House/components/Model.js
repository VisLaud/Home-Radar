import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

const Model = (props) => {
  //const gltf = useLoader(GLTFLoader, "./model/poly_road.gltf");
  const gltf = useLoader(GLTFLoader, "./model/house2.gltf");
  const ref = useRef();
  useFrame((state) => {
    //ref.current.rotation.x += 0.01;
    ref.current.rotation.y -= 0.001;
  });
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} ref={ref} position={[0, -2, 0]} />
    </Suspense>
  );
};

export default Model;
