import Decimal from "break_infinity.js";

export default class Effect {

    get label() {
        return "Default Effect Label"
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
}