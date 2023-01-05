import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";


const CardTable = ({gameState, setGameState}) => {


    return (
        <TableWrapper>
            {gameState.table.map((card) => {
                return <Card name={card}></Card>;
            })}
        </TableWrapper>
    );
}



const TableWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
border: 10px solid;
max-height: 100%;
max-width: 100%;
height: 600px;
width: 600px;
margin: 0;
padding: 0;
`;


export default CardTable;