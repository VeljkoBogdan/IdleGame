import {useState} from 'react'

function App() {
    return (
        <div className={"screen-container"}>
            <div className={"game-navbar"}>
                <h1> Game Navbar </h1>
            </div>
            <div className={"game-container"}>
                <div className={"score-container"}>
                    <h1> Score </h1>
                </div>
                <div className={"upgrade-container"}>
                    <h1> Upgrades </h1>
                </div>
            </div>
        </div>
    )
}

export default App
