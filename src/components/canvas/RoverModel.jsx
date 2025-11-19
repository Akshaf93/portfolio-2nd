import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// DEBUG VERSION: No external file loading, just a shape.
const RoverModel = (props) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta; // Spin it
      meshRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      {/* A generic box, 2x2x2 units */}
      <boxGeometry args={[2, 2, 2]} />
      {/* Bright orange wireframe so it's impossible to miss */}
      <meshStandardMaterial color="orange" wireframe={true} />
    </mesh>
  );
};

export default RoverModel;