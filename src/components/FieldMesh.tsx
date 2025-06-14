import { useMemo } from 'react';
import type { JSX } from 'react';

type FieldMeshProps = {
  field: number[][];
};

export const FieldMesh = ({ field }: FieldMeshProps) => {
  const cells = useMemo(() => {
    const elements: JSX.Element[] = [];

    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[y].length; x++) {
        if (field[y][x] !== 0) {
          elements.push(
            <mesh position={[x, -y, 0]} key={`${x}-${y}`}>
              <boxGeometry args={[0.9, 0.9, 0.9]} />
              <meshBasicMaterial color="gray" />
            </mesh>
          );
        }
      }
    }

    return elements;
  }, [field]);

  return <group>{cells}</group>;
};