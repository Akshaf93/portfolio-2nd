import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const RoverModel = (props) => {
  const meshRef = useRef();
  
  // 1. LOAD THE FILE
  const { scene } = useGLTF('/models/rover.glb');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
  });

  return (
    <group {...props}>
      {/* 2. SCALE ADJUSTMENT
         Start with 0.01. If it's invisible, try 0.1 or 1.0.
         If it's black, the ModalViewer environment handles lighting.
      */}
      <mesh ref={meshRef} scale={0.01}> 
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

// Preload makes it open faster
useGLTF.preload('/models/rover.glb');

export default RoverModel;