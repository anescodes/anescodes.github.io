import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// مكون شبكة الأشكال السداسية ثلاثية الأبعاد
const HexGridMesh = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.02;
      groupRef.current.position.y = Math.sin(time * 0.2) * 0.15;
    }
  });

  // إنشاء شكل هندسي سداسي (Hexagon Shape)
  const createHexShape = () => {
    const shape = new THREE.Shape();
    const radius = 1.2;
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  };

  const hexShape = createHexShape();
  const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 };

  // توليد مصفوفة من الإحداثيات لخلايا الـ Hexagon
  const hexagons = [];
  const rows = 7;
  const cols = 9;
  for (let r = -rows; r <= rows; r++) {
    for (let c = -cols; c <= cols; c++) {
      const x = c * 2.1 + (r % 2) * 1.05;
      const y = r * 1.8;
      if (Math.abs(x) < 16 && Math.abs(y) < 11) {
        hexagons.push({ id: `${r}-${c}`, position: [x, y, (r * c) % 3 * -0.2] });
      }
    }
  }

  return (
    <group ref={groupRef}>
      {hexagons.map((hex, idx) => (
        <mesh key={hex.id} position={hex.position}>
          <extrudeGeometry args={[hexShape, extrudeSettings]} />
          <meshStandardMaterial 
            color="#2563EB" 
            wireframe={idx % 3 === 0} 
            transparent 
            opacity={0.14} 
          />
        </mesh>
      ))}
    </group>
  );
};

const ArchitecturalBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <HexGridMesh />
      </Canvas>
    </div>
  );
};

export default ArchitecturalBackground;