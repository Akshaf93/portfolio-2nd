import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei'; // Helper for floating animation

const EngineeringMesh = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    // Reduced float intensity to save recalc
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group {...props}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.1 : 1}
        >
          {/* OPTIMIZATION: Reduced tubularSegments (120->100) and radialSegments (20->16) */}
          <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
          <meshStandardMaterial 
            color={hovered ? "#00d8ff" : "#ffffff"} 
            emissive={hovered ? "#00d8ff" : "#000000"}
            wireframe={true} 
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* OPTIMIZATION: Removed the inner Icosahedron ghost if it's not strictly needed, 
            OR keep it but make it simple */}
        <mesh scale={0.6}>
           {/* Lower detail geometry */}
          <octahedronGeometry args={[1, 0]} /> 
          <meshBasicMaterial color="#00d8ff" wireframe transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

export default EngineeringMesh;