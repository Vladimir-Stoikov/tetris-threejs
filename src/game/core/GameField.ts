export class GameField {
  private _grid: number[][];

  constructor(public width: number, public height: number) {
    this._grid = Array.from({ length: height }, () => Array(width).fill(0));
  }

  get grid() {
    return this._grid;
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

          if (newY >= 0 && this._grid[newY][newX] !== 0) {
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
      if (this._grid[y].every(cell => cell !== 0)) {
        this._grid.splice(y, 1);
        this._grid.unshift(Array(this.width).fill(0));
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
          const newX = x + col;
          if (newY >= 0 && newY < this.height && newX >= 0 && newX < this.width) {
            this._grid[newY][newX] = shape[row][col];
          }
        }
      }
    }
  }
}