import React from "react";
import styled from "styled-components";

const CardTable = (testCards) => {

    testCards = ["Card1", "Card2", "Card3", "Card4", "Card5"];

    return (
        <TableWrapper>
            {testCards.map((card) => {
                return <div>{card}</div>;
            })}
        </TableWrapper>
    );
}



const TableWrapper = styled.div`
display: grid;
border: 10px solid;
max-height: 100%;
max-width: 100%;
height: 600px;
width: 600px;
margin: 0;
padding: 0;
`;


export default CardTable;