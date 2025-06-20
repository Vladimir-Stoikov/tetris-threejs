import { Canvas } from '@react-three/fiber';
import { I_Tetromino, J_Tetromino, L_Tetromino, O_Tetromino, S_Tetromino, T_Tetromino, Z_Tetromino } from '../game/entities/Tetromino';
import { TetrominoMesh } from './TetrominoMesh';
import { useGameLoop } from '../game/core/useGameLoop';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { GameField } from '../game/core/GameField';
import { FieldMesh } from './FieldMesh';

type TetrosType = I_Tetromino | O_Tetromino | L_Tetromino | J_Tetromino | S_Tetromino | Z_Tetromino | T_Tetromino;

export const GameScene = () => {
  const figures = useMemo(() => [new I_Tetromino(), new O_Tetromino(), new L_Tetromino(), new J_Tetromino(), new S_Tetromino(), new Z_Tetromino(), new T_Tetromino()], []);

  const [piece, setPiece] = useState<TetrosType>(new I_Tetromino());
  const [position, setPosition] = useState({ x: 4, y: 19, z: 0 });

  const [dropTime, setDropTime] = useState(Date.now());

  const [gameField] = useState(() => new GameField(10, 20));

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [nextPiece, setNextPiece] = useState<TetrosType>(new I_Tetromino());
  const [isPaused, setIsPaused] = useState(false);

  const [level, setLevel] = useState(1);
  const [dropSpeed, setDropSpeed] = useState(1000);

  useGameLoop(() => {
    if (gameOver || isPaused) return;
    if (Date.now() - dropTime > 1000) {
      move(0, -0.01);
      setDropTime(Date.now());
    }
    if (gameOver || isPaused) return;

    if (Date.now() - dropTime > dropSpeed) {
      move(0, -1);
      setDropTime(Date.now());
    }
  }, [dropSpeed]);

  const generateTetro = useCallback(() => {
    const newPiece = nextPiece;
    const newNextPiece = figures[Math.floor(Math.random() * figures.length)].clone();

    if (gameField.checkCollision(newPiece.getShape(), 4, 19)) {
      setGameOver(true);
      return;
    }

    setPiece(newPiece);
    setNextPiece(newNextPiece);
    setPosition({ x: 4, y: 19, z: 0 });

    const linesCleared = gameField.clearLines();
    if (linesCleared > 0) {
      setScore(prev => prev + linesCleared * 100);
    }
  }, [nextPiece, figures, gameField]);

  const move = useCallback(
    (dx: number, dy: number) => {
      const newX = position.x + dx;
      const newY = position.y + dy;

      if (!gameField.checkCollision(piece.getShape(), newX, newY)) {
        setPosition({ x: newX, y: newY, z: 0 });
      } else if (dy !== 0) {
        gameField.mergePiece(piece.getShape(), position.x, position.y);
        generateTetro();
      }
    },
    [position, piece, gameField]
  );

  const rotatePiece = useCallback(() => {
    setPiece(prev => {
      const newPiece = prev.clone();
      newPiece.rotate();
      return newPiece;
    });
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') move(-1, 0);
      if (e.key === 'ArrowRight') move(1, 0);
      if (e.key === ' ') generateTetro();
      if (e.key === 'ArrowUp') rotatePiece();
      if (e.key === 'ArrowDown') hardDrop();
      if (e.key === 'p') setIsPaused(prev => !prev);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move, generateTetro, rotatePiece]);

  const hardDrop = useCallback(() => {
    let newY = position.y;
    while (!gameField.checkCollision(piece.getShape(), position.x, newY - 1)) {
      newY--;
    }
    setPosition(prev => ({ ...prev, y: newY }));
  }, [position, piece, gameField]);

  return (
    <div>
      <div>
        Score: {score}
        {gameOver && <div style={{ color: 'red' }}>Game Over!</div>}
        {isPaused && <div style={{ color: 'yellow', textAlign: 'center' }}>PAUSED</div>}
      </div>

      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <FieldMesh field={gameField.grid} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <TetrominoMesh shape={piece.getShape()} figurePosition={[position.x, position.y, position.z]} />
      </Canvas>
    </div>
  );
};
