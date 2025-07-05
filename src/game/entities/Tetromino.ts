export class Tetromino {
  protected rotationState = 0;

  constructor(
    protected rotationStates: number[][][]
  ) {}

  public get shape(): number[][] {
    return this.rotationStates[this.rotationState];
  }

  public get width(): number {
    return this.shape[0]?.length ?? 0;
  }

  public get height(): number {
    return this.shape.length;
  }

  public rotate(): void {
    this.rotationState = (this.rotationState + 1) % this.rotationStates.length;
  }

  public getNextRotation(): number[][] {
    const next = (this.rotationState + 1) % this.rotationStates.length;
    return this.rotationStates[next];
  }

  public resetRotation(): void {
    this.rotationState = 0;
  }

  public clone(): Tetromino {
    return new Tetromino(
      this.rotationStates.map(state =>
        state.map(row => [...row])
      )
    );
  }

  static I(): Tetromino {
    const states = [
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ]
    ];
    return new Tetromino(states);
  }

  static O(): Tetromino {
    const state = [
      [1, 1],
      [1, 1]
    ];
    return new Tetromino([state]); 
  }

  static T(): Tetromino {
    return new Tetromino([
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
      ]
    ]);
  }

  static L(): Tetromino {
    return new Tetromino([
      [
        [1, 0],
        [1, 0],
        [1, 1]
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [1, 1],
        [0, 1],
        [0, 1]
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
      ]
    ]);
  }

  static J(): Tetromino {
    return new Tetromino([
      [
        [0, 1],
        [0, 1],
        [1, 1]
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      [
        [1, 1],
        [1, 0],
        [1, 0]
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
      ]
    ]);
  }
  
  static S(): Tetromino {
    return new Tetromino([
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ],
      [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
      ]
    ]);
  }
  
  static Z(): Tetromino {
    return new Tetromino([
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
      ]
    ]);
  }
  
}
