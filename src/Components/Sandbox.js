import React from 'react';
import CardTable from './CardTable';
import DebugControls from './DebugControls';

const Sandbox = () => {
  const initGameState = {
    player: { name: 'Kieran', score: '0', hand: [] },
    deck: [
      'Card1',
      'Card2',
      'Card3',
      'Card4',
      'Card5',
      'Card6',
      'Card7',
      'Card8',
      'Card9',
      'Card10',
      'Card11',
      'Card12',
      'Card13',
    ],
    table: [],
  };

  const [gameState, setGameState] = React.useState(initGameState);
  console.log(gameState.player.name);

  return (
    <>
      <CardTable gameState={gameState} setGameState={setGameState}></CardTable>
      <DebugControls
        gameState={gameState}
        setGameState={setGameState}
      ></DebugControls>
    </>
  );
};

export default Sandbox;
