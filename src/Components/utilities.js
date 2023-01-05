

export const drawCard = (gameState, setGameState) => {


    console.log("Drawing card!");
    const newState = {...gameState};
    const newCard = newState.deck.pop();
    newState.player.hand.push(newCard);
    setGameState(newState);

    return 0;
}


