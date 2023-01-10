import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const Banner = () => {
  return (
    <Wrapper>
      <MainText>Engineering sustainable solutions to empower businesses</MainText>
      <SecondaryBanner>
        <SecondaryText>
          Sclanet helps businesses modernize technology, transform experiences, and 
          reimagine processes to stay ahead in the growing, competitive market.
          <SecondarySpan>
            Our unique Software-as-a-Service and Robotics-as-a-Service overcome industry 
            complexities—fuelling growth.
          </SecondarySpan>
        </SecondaryText>
        <ImageContainer>
          <SecondaryImage src='/robotics.jpg' />
        </ImageContainer>
      </SecondaryBanner>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 40px 24px;
  margin: 0 auto;
  margin-bottom: 48px;

  @media screen and (min-width: 550px) {
    padding: 48px;
  }

  @media screen and (min-width: 1100px) {
    padding: 24px 96px;
  }
`;

const MainText = styled.h1`
  color: ${COLORS.grayText};
  font-size: 2.5rem;
  max-width: 920px;
  text-align: center;
  margin-bottom: 48px;

  @media screen and (min-width: 650px) {
    font-size: 3.5rem;
    padding-bottom: 64px;
  }
`;

const SecondaryBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 980px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const SecondaryText = styled.p`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
`;

const SecondarySpan = styled.span`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  padding-top: 16px;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const SecondaryImage = styled.img`
  width: 100%;
`;

export default Banner;
