import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const AboutSection = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <MainText>
          Helping companies untangle value
        </MainText>
        <SecondaryText>
          We’re readying our solutions, powered by SaaS and Robotics capabilities, to 
          accelerate radical growth for global businesses. We’re employing the latest 
          technology and partnering with outstanding teams to help enterprises embrace 
          change—making a world of difference.
        </SecondaryText>
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  background-color: ${COLORS.purple};
  width: 100%;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 80px 24px;

  @media screen and (min-width: 550px) {
    padding: 100px 64px;
  }

  @media screen and (min-width: 1100px) {
    padding: 100px 96px;
  }
`;

const MainText = styled.h2`
  color: white;
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

const SecondaryText = styled.p`
  color: white;
  font-size: 1rem;
  max-width: 680px;
`;

export default AboutSection;
