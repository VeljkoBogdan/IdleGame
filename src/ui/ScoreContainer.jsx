export default function ScoreContainer({ state }) {

    return (
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
    )
}