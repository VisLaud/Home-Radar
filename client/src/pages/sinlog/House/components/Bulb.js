const Bulb = (props) => {
  return (
    <mesh {...props}>
      <ambientLight castShadow />
    </mesh>
  );
};

export default Bulb;
