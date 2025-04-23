import { Tabs } from "../core/tabs.jsx";
import { useMemo } from "react";
import Tab from "../core/Tab.jsx";

export default function TabBar({ gameState, currentTab, setCurrentTab }) {
    // use memo so the tabs dont reset
    const availableTabs = useMemo(() => {
        return Tabs.filter(tab =>
            !tab.unlockCondition ||
            tab.unlockCondition(gameState)
        );
    }, [gameState]);

    return (
        <div className="game-navbar">
            {availableTabs.map(tab => (
                <Tab
                    key={tab.key}
                    tab={tab}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
            ))}
        </div>
    );
}
