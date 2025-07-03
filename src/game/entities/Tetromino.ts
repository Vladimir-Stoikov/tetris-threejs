export abstract class Tetromino {
  public shape: number[][];
  protected rotationState: number = 0;
  protected rotationStates: number[][][];

  constructor() {
    this.shape = this.generateShape();
    this.rotationStates = this.generateRotationStates();
  }

  protected abstract generateShape(): number[][];
  protected abstract generateRotationStates(): number[][][];

  public getShape(): number[][] {
    return this.shape;
  }

  public getWidth(): number {
    return this.shape[0].length;
  }

  public getHeight(): number {
    return this.shape.length;
  }
  public rotate(): void {
    this.rotationState = (this.rotationState + 1) % this.rotationStates.length;
    this.shape = this.rotationStates[this.rotationState];
  }

  public getNextRotation(): number[][] {
    const nextState = (this.rotationState + 1) % this.rotationStates.length;
    return this.rotationStates[nextState];
  }

  public resetRotation(): void {
    this.rotationState = 0;
    this.shape = this.rotationStates[0];
  }

  public clone(): this {
    const constructor = this.constructor as new () => this;
    const clone = new constructor();
    clone.rotationState = this.rotationState;
    clone.shape = this.shape.map(row => [...row]);
    clone.rotationStates = this.rotationStates.map(state =>
      state.map(row => [...row])
    );
    return clone;
  }
}

export class I_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
  }

  protected generateRotationStates(): number[][][] {
    return [
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
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ]
    ];
  }
}

export class O_Tetromino extends Tetromino {

  protected generateShape(): number[][] {
    return [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]
    ]
  }

}

export class T_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ]
    ]
  }
}

export class L_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]
    ]
  }
}

export class J_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
    ]
  }
}

export class S_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ]
    ]
  }
}

export class Z_Tetromino extends Tetromino {
  protected generateShape(): number[][] {
    return [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
  }

  protected generateRotationStates(): number[][][] {
    return [
      [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ]
    ]
  }
}