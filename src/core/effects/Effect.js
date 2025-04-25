import Decimal from "break_infinity.js";

export default class Effect {

    get label() {
        return "Default Effect Label"
    }

    get cost() {
        return Decimal.fromValue(0)
    }

    /**
     * @param {Decimal} value
     */
    applyAdditive(value) {
        return value
    }

    /**
     * @param {Decimal} value
     */
    applyMultiplicative(value) {
        return value
    }

    upgradeEffect() {}

    canPurchase() {
        return true;
    }
}