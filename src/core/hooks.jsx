import { useEffect, useRef, useState } from "react";
import { Game } from "./game.jsx";

export function useGameLoop() {
    const [state, setState] = useState({});
    const gameRef = useRef(null);

    useEffect(() => {
        const game = new Game();
        game.init();
        gameRef.current = game;

        const tickInterval = setInterval(() => {
            game.update();
        }, 50);

        const uiInterval = setInterval(() => {
            setState({ ...game.state });
        }, 100);

        return () => {
            clearInterval(tickInterval);
            clearInterval(uiInterval);
        };
    }, []);

    return { gameRef, state };
}
