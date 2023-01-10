import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <OuterWrapper ref={ref}>
      <Wrapper>
        <TextWrapper>
          <MainText>
            Helping companies untangle value
          </MainText>
          <SecondaryText>
            We’re readying our solutions, powered by SaaS and Robotics capabilities, to 
            accelerate radical growth for global businesses. We’re employing the latest 
            technology and partnering with outstanding teams to help enterprises embrace 
            change—making a world of difference.
          </SecondaryText>
        </TextWrapper>
        <ReportingImg src="/reporting.svg" alt="Analytics success image" />
      </Wrapper>
    </OuterWrapper>
  );
});

const OuterWrapper = styled.div`
  background-color: ${COLORS.purple};
  width: 100%;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 80px 24px;
  margin: 0 auto;

  @media screen and (min-width: 550px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 100px 64px;
  }

  @media screen and (min-width: 1100px) {
    padding: 100px 96px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.h2`
  color: white;
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: 550px) {
    text-align: initial;
  }
`;

const SecondaryText = styled.p`
  color: white;
  font-size: 1rem;
  max-width: 680px;
`;

const ReportingImg = styled.img`
  /* position: absolute; */
  /* top: 80px; */
  /* right: 200px; */
  padding: 48px 0 0;
  margin: 0 auto;
  height: 420px;

  @media screen and (min-width: 650px) {
    /* height: 100px; */
  }
`;

AboutSection.displayName = 'AboutSection';

export default AboutSection;
