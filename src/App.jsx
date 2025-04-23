import Decimal from "break_infinity.js";
import {useGameLoop} from "./core/hooks.jsx";
import TabBar from "./ui/TabBar.jsx";
import {useState} from "react";

function App() {
    const {game, state} = useGameLoop()
    const [currentTab, setCurrentTab] = useState("cells")

    return (
        <div className={"screen-container"}>
            <TabBar
                gameState={state}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <div className={"game-container"}>
                <div className={"score-container"}>
                    <div>
                        <h1>Cells: {
                            state.cells ?
                                state.cells.round().toString() :
                                0
                        } </h1>
                        <p>You are gaining: {
                            state.cellsPerSecond ?
                                state.cellsPerSecond.round().toString() :
                                0
                        } cells per second</p>
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
