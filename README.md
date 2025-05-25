# 🎮 Tetris with Three.js

**3D Tetris** built with React, TypeScript, and Three.js (via `@react-three/fiber`).

## 🛠 Technologies

- ⚡ **Vite** – Fast frontend tooling
- ⚛️ **React** – UI library
- 📘 **TypeScript** – Static typing
- 🎨 **Three.js** (`@react-three/fiber`) – 3D rendering

## 🚀 Features

- Classic Tetris gameplay in 3D
- Keyboard controls (← → ↓ ↑)
- Score system

## 🏗 Project Structure

```
src/
├── assets/               # 3D models/textures (если будут)
├── components/           # React components
│   ├── GameScene/        # Three.js canvas
│   ├── UI/               # Score, controls
│   └── TetrominoMesh.tsx # Renders tetrominoes
├── game/                 # Core logic
│   ├── core/             # Game state, collision
│   └── entities/         # Tetromino classes
├── hooks/                # useGameLoop, etc.
└── styles/               # Global CSS
```

## 📄 License

MIT
