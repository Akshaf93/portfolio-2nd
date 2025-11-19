import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const EngineeringMesh = (props) => {
  // Reference to the mesh to access rotation properties directly
  const meshRef = useRef();

  // State to track hover interactions
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe to the render-loop, rotating the mesh every frame
  useFrame((state, delta) => {
    // Rotate the mesh gently
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
    
    // Add a slight "floating" sine wave motion
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1.2} // Scales up when clicked
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* The Geometry: A simple Box for now (placeholder for CAD models) */}
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      
      {/* The Material: Wireframe aesthetic to look like a blueprint */}
      <meshStandardMaterial 
        color={hovered ? "#00d8ff" : "#e0e0e0"} // Cyan on hover, White default
        wireframe={true} 
      />
    </mesh>
  );
};

export default EngineeringMesh;