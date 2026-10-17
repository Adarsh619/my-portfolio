'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

/* Three.js (via React Three Fiber) wireframe orb behind the hero photo. Recolours with the theme. */
function Orb({ color }) {
  const mesh = useRef(null);
  useFrame((state, dt) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += dt * 0.25;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15 + state.pointer.y * 0.2;
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

export default function ThreeOrb() {
  const [color, setColor] = useState('#c8ff3d');

  useEffect(() => {
    const update = () => {
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      if (accent) setColor(accent);
    };
    update();
    window.addEventListener('themechange', update);
    return () => window.removeEventListener('themechange', update);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]} aria-hidden="true">
      <Orb color={color} />
    </Canvas>
  );
}
