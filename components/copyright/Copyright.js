import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const Copyright = () => {
  return (
    <Wrapper>
      <MainText>&copy; 2023 Sclanet Inc. All rights reserved.</MainText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(45,42,39);
  height: 100px;
  width: 100%;
`;

const MainText = styled.p`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  padding: 16px;
`;

export default Copyright;
