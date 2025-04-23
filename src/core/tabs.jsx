import CellsTab from "../ui/tabs/CellsTab.jsx";
import OptionsTab from "../ui/tabs/OptionsTab.jsx";
import AchievementsTab from "../ui/tabs/AchievementsTab.jsx";

export const Tabs = [
    {
        key: "cells",
        label: "Cells",
        component: <CellsTab />
    },
    {
        key: "achievements",
        label: "Achievements",
        component: <AchievementsTab />
    },
    {
        key: "options",
        label: "Options",
        component: <OptionsTab />
    }
]