import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const EngineeringMesh = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    // Only rotate if the component is mounted and valid
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    // Reduced Float intensity for less calculation overhead
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <group {...props}>
        
        {/* 1. The Main Core - Needs StandardMaterial for the "Glow" (Emissive) */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.1 : 1}
        >
          {/* Kept reduced segments from previous step */}
          <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
          <meshStandardMaterial 
            color={hovered ? "#00d8ff" : "#ffffff"} 
            emissive={hovered ? "#00d8ff" : "#000000"}
            emissiveIntensity={0.5} // Lower intensity is slightly cheaper
            wireframe={true} 
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* 2. Inner Geometric Ghost - OPTIMIZED */}
        <mesh scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          
          {/* CHANGED: From meshStandardMaterial to meshBasicMaterial.
              Basic materials do not calculate lighting. Free performance. */}
          <meshBasicMaterial 
            color="#00d8ff" 
            wireframe={true} 
            transparent={true} 
            opacity={0.1} 
          />
        </mesh>
      </group>
    </Float>
  );
};

export default EngineeringMesh;