import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const MainBanner = () => {
  return (
    <Wrapper>
      {/* <BannerImagesContainer>
        <Blob src="/blob.svg" alt="background image" />
        <MobileAppImg src="/mobile-app.svg" alt="SML Mobile App SVG" />
        <CartImg src="/cart.svg" alt="Cart SVG" />
        <RobotImg src="/robot.svg" alt="Storo SVG" />
      </BannerImagesContainer> */}
      {/* <CopyContainer>
          <MainText>
            <HighlightSpan>
              Redefining
            </HighlightSpan>
            Retail
          </MainText>
          <SubText>
            Building systems to maximize efficiency, convenience, &amp; intuitiveness
            for shoppers and store owners.
          </SubText>
        </CopyContainer> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 700px;
  padding: 24px 64px;
`;

const MobileAppImg = styled.img`
  position: absolute;
  top: 80px;
  right: 200px;
  height: 250px;

  @media screen and (max-width: 600px) {
    height: 100px;
  }
`;

const CartImg = styled.img`
  position: absolute;
  top: 120px;
  right: 0;
  height: 300px;

  @media screen and (max-width: 600px) {
    height: 120px;
  }
`;


const RobotImg = styled.img`
  position: absolute;
  top: 350px;
  right: 180px;
  height: 280px;

  @media screen and (max-width: 600px) {
    height: 112px;
  }
`;

const BannerImagesContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  width: fit-content;
`;

const HighlightSpan = styled.span`
  display: inline-block;
  padding: 2px 0;
  margin-right: 16px;
  font-size: 2.75rem;
  line-height: 1.5;
  border-bottom: 8px solid ${COLORS.purple};
  font-family: 'Gloria Hallelujah',sans-serif;
`;

const SubText = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${COLORS.grayText};
  max-width: 620px;
  padding: 24px 0;
  font-family: 'Lexend';
`;

const CopyContainer = styled.div`
  position: absolute;
  top: 164px;
  left: 64px;
`;

const SmallText = styled.p`
  color: ${COLORS.purple};
  font-size: 1.25rem;
  max-width: 620px; 
`;

const Blob = styled.img`
  position: absolute;
  top: -48px;
  right: 24px;
  opacity: 0.2;
  height: 720px;
`;

export default MainBanner;
