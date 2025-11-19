import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei'; // Helper for floating animation

const EngineeringMesh = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    // Complex rotation on multiple axes
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group {...props}>
        {/* 1. The Wireframe Core */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          scale={hovered ? 1.1 : 1}
        >
          {/* A TorusKnot looks like complex tubing or magnetic fields */}
          <torusKnotGeometry args={[1.2, 0.4, 120, 20]} />
          <meshStandardMaterial 
            color={hovered ? "#00d8ff" : "#ffffff"} 
            emissive={hovered ? "#00d8ff" : "#000000"}
            emissiveIntensity={0.5}
            wireframe={true} 
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* 2. Inner Geometric Ghost (Adds depth/layers) */}
        <mesh scale={0.6}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#00d8ff" wireframe transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

export default EngineeringMesh;