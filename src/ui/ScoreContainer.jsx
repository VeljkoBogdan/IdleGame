export default function ScoreContainer({ state }) {

    return (
        <div className={"score-container"}>
            <div>
                <h2 className={"score-title"}>
                    Cells:
                </h2>
                <h1
                    className={"score-amount"}
                >
                    {state.cells ?
                        state.cells.round().toString() :
                        0
                    }
                </h1>
                <p>
                    You are gaining: {
                    state.boostedCps ?
                        state.boostedCps.round().toString() :
                        0
                } cells per second</p>
            </div>
        </div>
    )
}