import React from 'react';
import styled from 'styled-components';

const BenefitsSection = () => {
  return (
    <Wrapper>
      Benefits section
      <SclanetLogo src="/sclanet-transparent.png" alt="Sclanet logo" />
      <BracketImg src="/bracket.png" alt="bracket image" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  background-color: rgb(244,246,250);
  min-height: 400px;
  width: 100%;
`;

const SclanetLogo = styled.img`
  margin: 0 auto;
  height: 70px;
`;

const BracketImg = styled.img`
  position: absolute;
  inset: 0;
  margin: auto;
  height: 150px;
`;

export default BenefitsSection;
