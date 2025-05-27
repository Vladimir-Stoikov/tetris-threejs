import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { I_Tetromino } from '../game/entities/Tetromino'
import { TetrominoMesh } from './TetrominoMesh'
import { useGameLoop } from '../game/core/useGameLoop'
import { useEffect } from 'react'

export const GameScene = () => {

  const tetromino = new I_Tetromino();

  useGameLoop(() => {});

  function moveLeft() {
    console.log('move left');
  }

  function moveRight() {
    console.log('move left');
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key === 'ArrowLeft') moveLeft();
      if(e.key === 'ArrowRight') moveRight();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50}} >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <TetrominoMesh shape={tetromino.shape}/>
    </Canvas>
  )
}
