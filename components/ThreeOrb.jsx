'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

/* Three.js (via React Three Fiber) wireframe orb, sits behind the hero photo. */
function Orb() {
  const mesh = useRef(null);
  useFrame((state, dt) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += dt * 0.25;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15 + state.pointer.y * 0.2;
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 2]} />
      <meshBasicMaterial color="#c8ff3d" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export default function ThreeOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]} aria-hidden="true">
      <Orb />
    </Canvas>
  );
}
