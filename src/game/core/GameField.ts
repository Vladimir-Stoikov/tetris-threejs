export class GameField {
  private grid: number[][];

  constructor(public width: number, public height: number) {
    this.grid = Array(height).fill(0).map(() => Array(width).fill(0))
  }
}