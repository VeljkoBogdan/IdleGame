import {useGameLoop} from "./core/hooks.jsx";
import TabBar from "./ui/TabBar.jsx";
import {useState} from "react";
import ContentContainerManager from "./ui/ContentContainerManager.jsx";
import {Tabs} from "./core/tabs.jsx";
import ScoreContainer from "./ui/ScoreContainer.jsx";

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
                <ScoreContainer
                    state={state}
                />
                <ContentContainerManager
                    currentTab={currentTabKey}
                    state={state}
                />
            </div>
        </div>
    )
}

export default App
