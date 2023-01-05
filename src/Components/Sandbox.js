import React from "react";
import CardTable from "./CardTable";
import DebugControls from "./DebugControls";

const Sandbox = () => {

    const initGameState = {
        player: {name: "Kieran", score: "0", hand: []},
        deck: ["Card1", "Card2", "Card3", "Card4","Card1", "Card2", "Card3","Card1", "Card2", "Card3","Card1", "Card2", "Card3"],
        table: []
    }

    const [gameState, setGameState] = React.useState(initGameState);
    console.log(gameState.player.name);

    return (
        <>
            <CardTable></CardTable>
            <DebugControls gameState={gameState} setGameState={setGameState}></DebugControls>
        </>);

}

export default Sandbox;