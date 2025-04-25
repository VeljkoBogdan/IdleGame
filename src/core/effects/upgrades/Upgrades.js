import Effect from "../Effect.js";
import Decimal from "break_infinity.js";

const Upgrades = [
    new class CellMultX extends Effect {
        amount = Decimal.fromValue(1);
        level = 0;

        get label() {
            return [
                `Multiply Cell production by 2x`,
                `Currently: ${this.amount}x`,
                `Cost: ${this.cost} cells`
            ];
        }

        get cost() {
            return Decimal.mul(30, this.level ** 2);
        }

        applyMultiplicative(value) {
            return value.mul(this.amount);
        }

        upgradeEffect(state) {
            if (state.cells.lt(this.cost)) return;
            state.cells = state.cells.sub(this.cost);
            this.amount = this.amount.mul(2);
            this.level++;
        }

        canPurchase(state) {
            return state.cells.gte(this.cost);
        }
    }()
];

export default Upgrades;
