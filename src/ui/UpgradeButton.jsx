import Effect from "../core/effects/Effect.js";
import UpgradeHandler from "../core/UpgradeHandler.js";

/**
 * @param {Effect} upgrade
 */
export default function UpgradeButton({ upgrade, state }) {

    return (
        <button
            onClick={() => {
                upgrade.upgradeEffect()
                UpgradeHandler.addUpgrade(upgrade, state)
            }}
        >
            {upgrade.label}
        </button>
    )
}