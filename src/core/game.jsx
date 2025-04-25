import Decimal from "break_infinity.js";
import Effects from "./effects/Effects.js";

export class Game {
    constructor() {
        this.init()
    }

    startState = {
        cells: Decimal.fromValue(0),
        cellsPerSecond: Decimal.fromValue(1),
        effects: []
    }

    state = {
        cells: Decimal.fromValue(0),
        cellsPerSecond: Decimal.fromValue(1),
        effects: []
    }

    init() {
        this.state = this.startState

        setInterval(() => this.update(), 50)

        console.log("Game Initialized")
    }

    update() {
        // represents a 20th part of a second, multiply gain by this number so the gain matches time
        const tick = 5 / 100

        let cpsWithEffects = Effects.addEffects(this.state.cellsPerSecond, this.state);
        this.state.cells = this.state.cells.add(cpsWithEffects.mul(tick))
        //
        // this.state = {
        //     ...this.state,
        //     cells: newCellAmount
        // }
    }
}