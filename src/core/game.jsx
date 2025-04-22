import Decimal from "break_infinity.js";

export class Game {
    constructor() {
        this.init()
    }

    startState = {
        cells: Decimal.fromValue(0),
        cellsPerSecond: Decimal.fromValue(1)
    }

    state

    init() {
        this.state = this.startState

        setInterval(() => this.update(), 50)

        console.log("Game Initialized")
    }

    update() {
        // represents a 20th part of a second, multiply gain by this number so the gain matches time
        const tick = 5 / 100

        let newCellAmount = this.state.cells.add(this.state.cellsPerSecond.mul(tick))

        this.state = {
            ...this.state,
            cells: newCellAmount
        }
    }
}