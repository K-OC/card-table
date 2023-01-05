import React from 'react';
import styled from 'styled-components';
import { testCard } from './CardWithMockData';
import PropTypes from 'prop-types';

const CardTitle = styled.div`
  width: 100%;
  border: 1px solid green;
`;
const CardInfo = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 10rem;
  max-height: 12rem;
  border: 1px solid grey;
  ${CardTitle} {
    flex: 1;
  }
  ${ImageWrapper} {
    flex: 2;
  }
  ${CardInfo} {
    flex: 3;
  }
`;
// todo add props and test object to import

const Card = ({ name = 'Test Card', info, art, alt }) => {
  info = testCard[0].cardInfo.info;
  art = testCard[0].cardInfo.img;
  alt = testCard[0].cardInfo.alt;

  console.log(testCard);
  return (
    <CardWrapper>
      <CardTitle>{name}</CardTitle>
      <ImageWrapper>
        <img src={art} alt={alt} />
      </ImageWrapper>
      <CardInfo>{info}</CardInfo>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  art: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;
