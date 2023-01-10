import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const ProductsSection = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <SclanetLogo src="/sclanet-transparent.png" alt="Sclanet logo" />
        <BracketImg src="/bracket.png" alt="bracket image" />
        <ProductDivContainer>
          <ProductDiv>
            <SMLLogo src="/sml-logo.png" alt="SkipMyLin logo" />
            <ProductDescription>
              Delivering growth for B2C brands with 
              automated checkout solutions, safer 
              payment methods, efficient stock &amp;
              stock management, unique product 
              promotion, actionable insights for 
              performance improvement, and more
            </ProductDescription>
            <MoreToCome>
              more details soon
            </MoreToCome>
          </ProductDiv>
          <ProductDiv>
            <ToroLogoPlaceholder>Toro Logo placeholder</ToroLogoPlaceholder>
            <ProductDescription>
              Driving B2C growth with a robotics 
              platform that is available to serve 24*7, 
              identifies people and products for 
              engagement, measures and analyses 
              service effectiveness, and more.
            </ProductDescription>
            <MoreToCome>
              more details soon
            </MoreToCome>
          </ProductDiv> 
        </ProductDivContainer>     
      </Wrapper>
    </OuterWrapper>
  );
};


const OuterWrapper = styled.div`
  background-color: rgb(244,246,250);
  width: 100%;
`;

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(244,246,250);
  width: 100%;
  max-width: 1440px;
  padding: 48px 24px 64px;
  margin: 0 auto;

  @media screen and (min-width: 550px) {
    padding: 100px 64px;
  }

  @media screen and (min-width: 1100px) {
    padding: 100px 96px;
  }
`;

const SclanetLogo = styled.img`
  margin: 0 auto;
  height: 80px;

  @media screen and (min-width: 650px) {
    margin-bottom: 16px;    
  }
`;

const ProductDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  @media screen and (min-width: 650px) {
    margin-top: 16px;
    align-items: center;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 24px;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 24px 0;

  @media screen and (min-width: 650px) {
    flex: 1 1 200px;
  }
`;

const SMLLogo = styled.img`
  margin: 0 auto 24px 0;
  height: 65px;
`;

const ProductDescription = styled.p`
  color: ${COLORS.grayText};
  font-size: 1rem;
`;

const MoreToCome = styled.p`
  color: ${COLORS.purple};
  font-size: 1.2rem;
  width: fit-content;
  margin: 12px 0;
`;

const ToroLogoPlaceholder = styled.p`
  font-size: 2rem;
  margin-bottom: 32px;
`;

const BracketImg = styled.img`
  display: none;


  @media screen and (min-width: 900px) {
    display: block;
    /* position: absolute; */
    /* inset: 0; */
    margin: auto;
    min-height: 120px;
    max-height: 150px;
  }
`;


export default ProductsSection;
