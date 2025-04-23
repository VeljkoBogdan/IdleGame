import Decimal from "break_infinity.js";
import {useGameLoop} from "./core/hooks.jsx";
import TabBar from "./ui/TabBar.jsx";
import {useState} from "react";
import ContentContainerManager from "./ui/ContentContainerManager.jsx";
import {Tabs} from "./core/tabs.jsx";

function App() {
    const {game, state} = useGameLoop()
    const [currentTabKey, setCurrentTabKey] = useState(Tabs[0].key)

    return (
        <div className={"screen-container"}>
            <TabBar
                gameState={state}
                currentTab={currentTabKey}
                setCurrentTab={setCurrentTabKey}
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
                <ContentContainerManager
                    currentTab={currentTabKey}
                    state={state}
                />
            </div>
        </div>
    )
}

export default App
