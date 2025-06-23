// import { Mesh, BoxGeometry, MeshStandardMaterial} from 'three'

import { useMemo } from 'react';

interface TetrominoMeshProps {
  shape: number[][];
  figurePosition?: [number, number, number];
  type?: string;
}

export const TetrominoMesh = ({ shape, figurePosition = [0, 0, 0], type }: TetrominoMeshProps) => {
  const color = useMemo(() => {
    switch (type) {
      case 'I':
        return 'cyan';
      case 'O':
        return 'yellow';
      case 'T':
        return 'purple';
      case 'L':
        return 'orange';
      case 'J':
        return 'blue';
      case 'S':
        return 'green';
      case 'Z':
        return 'red';
      default:
        return 'white';
    }
  }, [type]);

  const blocks = shape.flatMap((row, y) => {
    return row.map((cell, x) =>
      cell ? (
        <mesh position={[x, -y, 0]} key={`${x}-${y}`}>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial color={color} />
        </mesh>
      ) : null
    );
  });

  return <group position={figurePosition}>{blocks}</group>;
};
