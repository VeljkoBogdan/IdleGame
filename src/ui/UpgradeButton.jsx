import Effect from "../core/effects/Effect.js";
import UpgradeHandler from "../core/UpgradeHandler.js";

/**
 * @param {Effect} upgrade
 * @param state
 */
export default function UpgradeButton({ upgrade, state }) {

    return (
        <button
            className={"upgrade-button"}
            onClick={() => {
                upgrade.upgradeEffect(state)
                UpgradeHandler.addUpgrade(upgrade, state)
            }}
        >
            {upgrade.label}
        </button>
    )
}