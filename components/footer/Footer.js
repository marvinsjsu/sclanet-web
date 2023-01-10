import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <MainText>
          What are you waiting for?
        </MainText>
        <SecondaryText>
          Sclanet can help make sense of efficient operations through
          its SaaS and Robotics technology.
        </SecondaryText>
        <SecondaryText>
          Let us help you understand our services better. 
        </SecondaryText>
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  background-color: rgb(45,42,39);
  width: 100%;
`;

const Wrapper = styled.footer`
  color: white;
  background-color: rgb(45,42,39);
  min-height: 250px;
  width: 100%;
  max-width: 1440px;
  padding: 80px 24px;
  margin-top: auto;

  @media screen and (min-width: 550px) {
    padding: 100px 64px;
  }

  @media screen and (min-width: 1100px) {
    padding: 100px 96px;
  }
`;

const MainText = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const SecondaryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  max-width: 680px;
  margin-bottom: 16px;
`;

export default Footer;
