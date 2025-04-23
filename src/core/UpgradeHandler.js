export default class UpgradeHandler {
    static addUpgrade(upgrade, gameState) {
        // Check if upgrade of the same class is already added
        const exists = gameState.effects.some(effect => effect.constructor === upgrade.constructor);

        if (!exists) {
            gameState.effects.push(upgrade);
        }
    }
}