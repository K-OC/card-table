import React from "react";

const DebugControls = ({gameState, setGameState}) => {


    console.log(gameState);
    return (<div>
        <p>Player: {gameState.player.name}</p>
        <p>Score: {gameState.player.score}</p>
        <p>Hand: {gameState.player.hand.length > 0 && gameState.player.hand.map((card) =>
        {return <button onClick={() => {
            console.log("Playing card!");
            const newState = {...gameState};
            newState.table.push(card);
            const cardHandIndex = newState.player.hand.indexOf(card);
            newState.player.hand.splice(cardHandIndex, 1);
            setGameState(newState);

        }}
        
        >{card} </button>}) }
        </p>
        <p>Cards in deck: {gameState.deck.length}</p>
        
        
        <button onClick={() => {
            console.log("Drawing card!");
            const newState = {...gameState};
            const newCard = newState.deck.pop();
            newState.player.hand.push(newCard);
            setGameState(newState);
            
            console.log(newCard);
        } }>Draw card</button>


    </div>);
}

export default DebugControls;