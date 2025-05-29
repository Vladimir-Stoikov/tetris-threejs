import { Canvas } from '@react-three/fiber'
import { I_Tetromino } from '../game/entities/Tetromino'
import { TetrominoMesh } from './TetrominoMesh'
import { useGameLoop } from '../game/core/useGameLoop'
import { useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

export const GameScene = () => {

  const [piece, setPiece] = useState(new I_Tetromino());
  const [position, setPosition] = useState({x: 0, y: 0, z: 0});

  useGameLoop(() => {});

  function move(dx: number, dy: number) {
    setPosition(prev => ({x: prev.x + dx, y: prev.y + dy, z: prev.z}));
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if(e.key === 'ArrowLeft') move(-1, 0);
      if(e.key === 'ArrowRight') move(1, 0);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50}} >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <TetrominoMesh shape={piece.shape} figurePosition={[position.x, position.y, position.z]}/>
    </Canvas>
  )
}
