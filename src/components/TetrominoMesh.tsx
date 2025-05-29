// import { Mesh, BoxGeometry, MeshStandardMaterial} from 'three'

export const TetrominoMesh = ({ shape, figurePosition = [0, 0, 0] }: { shape: number[][], figurePosition?: [number, number, number] }) => {
  const blocks = shape.flatMap((row, y) => {
    return row.map((cell, x) => cell ? (
      <mesh position={[x, -y, 0]} key={`${x}-${y}`}>
        <boxGeometry args={[0.9, 0.9, 0.9]}/>
        <meshStandardMaterial color="red"/>
      </mesh>
    ) : null)
  })

  return <group position={figurePosition}>{blocks}</group>
}