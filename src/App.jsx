import Decimal from "break_infinity.js";
import {useGameLoop} from "./core/hooks.jsx";

function App() {
    const {game, state} = useGameLoop()

    return (
        <div className={"screen-container"}>
            <div className={"game-navbar"}>
                <h1> Game Navbar </h1>
            </div>
            <div className={"game-container"}>
                <div className={"score-container"}>
                    <div>
                        <h1>Cells: {
                            state.cells ?
                                state.cells.round().toString() :
                                0
                        } </h1>
                    </div>
                </div>
                <div className={"upgrade-container"}>
                    <h1> Upgrades </h1>
                </div>
            </div>
        </div>
    )
}

export default App
