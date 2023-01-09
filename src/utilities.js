export const drawCard = (gameState, setGameState) => {
  console.log('Drawing card!');
  const newState = { ...gameState };
  const newCard = newState.deck.pop();
  newState.player.hand.push(newCard);
  setGameState(newState);

  return 0;
};

export const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
