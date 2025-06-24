import { useMemo } from 'react';
import type { JSX } from 'react';

type FieldMeshProps = {
  field: number[][];
};

export const FieldMesh = ({ field }: FieldMeshProps) => {
  const cells = useMemo(() => {
    const elements: JSX.Element[] = [];
    for (let y = 0; y < field.length; y++) {
      const rowComplete = field[y].every(cell => cell !== 0);
      for (let x = 0; x < field[y].length; x++) {
        if (field[y][x] !== 0) {
          elements.push(
            <mesh position={[x, -y, 0]} key={`${x}-${y}`}>
              <boxGeometry args={[0.9, 0.9, 0.9]} />
              <meshStandardMaterial color={rowComplete ? 'white' : 'gray'} emissive={rowComplete ? 'white' : 'black'} emissiveIntensity={rowComplete ? 1 : 0} />
            </mesh>
          );
        }
      }
    }
    return elements;
  }, [field]);

  return <group>{cells}</group>;
};
