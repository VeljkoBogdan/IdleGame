import Decimal from "break_infinity.js";

const Effects = {
    /**
     * Applies all effects to a value.
     * @param {Decimal} baseValue - The base value (e.g. current cell count).
     * @param {Object} gameState - Full game state for contextual effects.
     * @returns {Decimal} - Modified value.
     */
    addEffects(baseValue, gameState) {
        let value = baseValue;

        // Example effects — additive, then multiplicative
        value = value.plus(this.additiveEffects(gameState));
        value = value.times(this.multiplicativeEffects(gameState));

        return value;
    },

    additiveEffects(gameState) {
        let total = Decimal.fromValue(0);

        gameState.effects.map(effect => {
            effect.applyAdditive(total)
        })

        return total;
    },

    multiplicativeEffects(gameState) {
        return gameState.effects.reduce((acc, effect) => {
            return effect.applyMultiplicative(acc);
        }, Decimal.fromValue(1));
    }
};

export default Effects;
