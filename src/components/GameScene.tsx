import { Canvas } from '@react-three/fiber'
import { I_Tetromino, J_Tetromino, L_Tetromino, O_Tetromino, S_Tetromino, Z_Tetromino } from '../game/entities/Tetromino'
import { TetrominoMesh } from './TetrominoMesh'
import { useGameLoop } from '../game/core/useGameLoop'
import { useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

type TetrosType = I_Tetromino | O_Tetromino | L_Tetromino | J_Tetromino | S_Tetromino | Z_Tetromino;

export const GameScene = () => {

  const figures = [new I_Tetromino, new O_Tetromino, new L_Tetromino, new J_Tetromino, new S_Tetromino, new Z_Tetromino];

  const [piece, setPiece] = useState<TetrosType>(new I_Tetromino());
  const [position, setPosition] = useState({x: 0, y: 0, z: 0});

  const [dropTime, setDropTime] = useState(Date.now());
  
  useGameLoop(() => {
    if (Date.now() - dropTime > 1000) { 
      move(0, -0.01);
      setDropTime(Date.now());
    }
  });

  function generateTetro() {
    const randomTetro = Math.ceil((Math.random()*figures.length) - 1);
    setPiece(figures[randomTetro]);
  }

  function move(dx: number, dy: number) {
    setPosition(prev => ({x: prev.x + dx, y: prev.y + dy, z: prev.z}));
  }

  function rotatePiece() {
    const newPiece = piece.clone();
    newPiece.rotate();
    setPiece(newPiece);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if(e.key === 'ArrowLeft') move(-1, 0);
      if(e.key === 'ArrowRight') move(1, 0);
      if(e.key === ' ') generateTetro();
      if (e.key === 'ArrowUp') rotatePiece();
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
