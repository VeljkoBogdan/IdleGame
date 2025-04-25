import {useGameLoop} from "./core/hooks.jsx";
import TabBar from "./ui/TabBar.jsx";
import {useState} from "react";
import ContentContainerManager from "./ui/ContentContainerManager.jsx";
import {Tabs} from "./core/tabs.jsx";
import ScoreContainer from "./ui/ScoreContainer.jsx";

function App() {
    const { gameRef, state } = useGameLoop();
    const [currentTabKey, setCurrentTabKey] = useState(Tabs[0].key);

    const game = gameRef.current;

    if (!game || !game.state) return null; // wait for game to initialize

    return (
        <div className="screen-container">
            <TabBar
                gameState={game.state}
                currentTab={currentTabKey}
                setCurrentTab={setCurrentTabKey}
            />
            <div className="game-container">
                <ScoreContainer
                    state={game.state}
                />
                <ContentContainerManager
                    currentTab={currentTabKey}
                    state={game.state}
                />
            </div>
        </div>
    );
}


export default App
