import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const ClearEffects = ({ linesCleared }: { linesCleared: number }) => {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current && linesCleared > 0) {
      groupRef.current.rotation.z += 0.05;
    }
  });

  if (linesCleared === 0) return null;

  return (
    <group ref={groupRef}>
      <mesh position={[5, -10, 0]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color='yellow' transparent opacity={0.7} />
      </mesh>
    </group>
  );
};
