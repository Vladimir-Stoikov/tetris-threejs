export class GameField {
  private grid: number[][];

  constructor(public width: number, public height: number) {
    this.grid = Array(height).fill(0).map(() => Array(width).fill(0));
  }

  checkCollision(shape: number[][], x: number, y: number): boolean {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] !== 0) {
          const newX = x + col;
          const newY = y + row;

          if (newX < 0 || newX >= this.width || newY >= this.height) {
            return true;
          }

          if (newY >= 0 && this.grid[newY][newX] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  clearLines(): number {
    let linesCleared = 0;
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.grid[y].every(cell => cell !== 0)) {
        this.grid.splice(y, 1);
        this.grid.unshift(Array(this.width).fill(0));
        linesCleared++;
      }
    }
    return linesCleared;
  }

  mergePiece(shape: number[][], x: number, y: number): void {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] !== 0) {
          const newY = y + row;
          if (newY >= 0) {
            this.grid[newY][x + col] = shape[row][col];
          }
        }
      }
    }
  }
}