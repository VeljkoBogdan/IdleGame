import Effect from "../Effect.js";
import Decimal from "break_infinity.js";

const Upgrades = [
    new class CellMultX extends Effect {
        amount = Decimal.fromValue(1);
        level = 0;

        get label() {
            return `Multiply Cell production by ${this.amount}x\nCost: ${this.cost}`;
        }

        get cost() {
            return Decimal.mul(30, this.level ** 2);
        }

        applyMultiplicative(value) {
            return value.mul(this.amount);
        }

        upgradeEffect(state) {
            if (state.cells.lt(this.cost)) return;
            console.log("Before:", state.cells.toString());
            state.cells = state.cells.sub(this.cost);
            console.log("After:", state.cells.toString());
            this.amount = this.amount.mul(2);
            this.level++;
        }
    }()
];

export default Upgrades;
