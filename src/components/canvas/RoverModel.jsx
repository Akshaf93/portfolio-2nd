import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const RoverModel = (props) => {
  const meshRef = useRef();
  
  // Note: This expects a file named 'rover.glb' in your public/models/ folder.
  // If you don't have the file yet, the site will load but show an error in the console.
  // We use a try-catch or simple check to prevent crashing if file is missing.
  const { scene } = useGLTF('/models/rover.glb');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  return (
    <group {...props}>
      {/* Scale adjusted: SolidWorks exports are often huge. 
          If it's invisible, try changing scale to 0.1 or 1.0 */}
      <mesh ref={meshRef} scale={0.01}> 
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

// Preload to prevent lag
useGLTF.preload('/models/rover.glb');

export default RoverModel;