import Decimal from "break_infinity.js";
import Effects from "./effects/Effects.js";

export class Game {
    constructor() {
        this.init()
    }

    startState = {
        cells: Decimal.fromValue(0),
        cellsPerSecond: Decimal.fromValue(1),
        boostedCPS: Decimal.fromValue(1),
        effects: []
    }

    state = {}

    init() {
        this.state = this.startState

        setInterval(() => this.update(), 50)

        console.log("Game Initialized")
    }

    update() {
        const tick = 5 / 100;

        const boostedCps = Effects.addEffects(this.state.cellsPerSecond, this.state);
        this.state.cells = this.state.cells.add(boostedCps.mul(tick));
        this.state.boostedCps = boostedCps;
    }

}