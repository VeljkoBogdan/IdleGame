import Effect from "../Effect.js";

const Upgrades = [
    new class CellMultX extends Effect {
        amount = 1;

        get label() {
            return `Multiply Cell production by ${this.amount}x`;
        }

        applyMultiplicative(value) {
            return value.mul(this.amount);
        }

        upgradeEffect() {
            this.amount *= 2;
        }
    }()
];

export default Upgrades;
