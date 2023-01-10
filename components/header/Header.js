import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

import { COLORS } from '../../constants/colors';

const Header = () => {
  return (
    <Wrapper>
      <Logo
        src="/sclanet-logo.png"
        alt="Sclanet Logo"
        width={320}
        height={56}
      />
      <Spacer />
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink href='/'>Products</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href='/'>About</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink href='/'>Contact</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 24px;

  @media screen and (min-width: 550px) {
    padding: 64px;
  }
  
  @media screen and (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1100px) {
    padding: 64px 96px;
  }
`;

const Spacer = styled.div`
  display: none;

  @media screen and (min-width: 640px) {
    display: block;
    flex: 2 0 40px;
  }
`;

const Logo = styled(Image)`
  display: inline-block;
  flex: 1;
  max-width: 294px;
`;

const Nav = styled.nav`
  position: relative;
  display: block;
  padding-top: 24px;
  min-width: 245px; 
`;

const NavList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }  
`;

const NavListItem = styled.li`
  display: inline-block;
  padding: 8px 0;
  margin: 0 16px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    margin-bottom: -3px;
    border-bottom: 3px solid ${COLORS.purple};
  }
`;

const NavLink = styled(Link)`
  color: rgb(45,42,39);
  padding: 16px 0;
  text-decoration: none;

  &:hover {
    font-weight: 600;
    color: ${COLORS.purple};
  }
`;

export default Header;
