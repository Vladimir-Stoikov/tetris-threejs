export class GameField {
  private grid: number[][];

  constructor(public width: number, public height: number) {
    this.grid = Array(height).fill(0).map(() => Array(width).fill(0))
  }

  checkCollision(shape: number[][], x: number, y: number): boolean {
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col] && 
            (x + col < 0 || 
             x + col >= this.width || 
             y + row >= this.height)) {
          return true;
        }
      }
    }
    return false;
  }
}