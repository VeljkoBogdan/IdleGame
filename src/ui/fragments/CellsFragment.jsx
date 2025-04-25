import Upgrades from "../../core/effects/upgrades/Upgrades.js";
import UpgradeButton from "../UpgradeButton.jsx";

export default function CellsFragment({ state }) {

    return (
        <div>
            {Upgrades.map(effect => <UpgradeButton key={effect.label} upgrade={effect} state={state} />)}
        </div>
    )
}