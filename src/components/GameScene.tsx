import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const GameScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50}} >
      <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]}/>
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}
