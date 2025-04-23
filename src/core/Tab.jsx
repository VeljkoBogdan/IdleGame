export default function Tab({ tab, currentTab, setCurrentTab }) {
    return (
        <button
            key={tab.key}
            className={'tab-button ' + (tab.key === currentTab ? 'active' : '')}
            onClick={() => setCurrentTab(tab.key)}
        >
            {tab.label}
        </button>
    );
}