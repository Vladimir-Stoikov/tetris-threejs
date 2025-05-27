import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { I_Tetromino } from '../game/entities/Tetromino'
import { TetrominoMesh } from './TetrominoMesh'

export const GameScene = () => {

  const tetromino = new I_Tetromino();

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50}} >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <TetrominoMesh shape={tetromino.shape}/>
    </Canvas>
  )
}
