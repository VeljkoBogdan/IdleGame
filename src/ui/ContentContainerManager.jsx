import {Tabs} from "../core/tabs.jsx";

export default function ContentContainerManager({ currentTab, state }) {
    // get the tab from the tabKey
    const tab = Tabs.find(tab => tab.key === currentTab)

    return (
        <div className={"content-container-manager"}>
            <h1> {tab.label} </h1>
        </div>
    )
}