'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';

/* 3D object built with React Three Fiber + drei (pattern used by 3D portfolios). */
function Orb() {
  const mesh = useRef(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={mesh} args={[1, 96, 96]}>
        <MeshDistortMaterial color="#c8ff3d" roughness={0.25} metalness={0.2} distort={0.35} speed={1.8} />
      </Sphere>
    </Float>
  );
}

export default function HeroOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      <pointLight position={[-3, -2, -2]} color="#ffffff" intensity={0.6} />
      <Orb />
    </Canvas>
  );
}
