import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';

const Footer = () => {

  const [isSent, setIsSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    resetMessages();

    const url = '/api/contact-form';
    
    const data = JSON.stringify({
      email: event.target.email.value,
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    };

    const response = await fetch(url, options);
    
    if (response.ok) {
      setIsSent(true);
    } else {
      setHasError(true);
    }
  };

  const resetMessages = () => {
    setIsSent(false);
    setHasError(false);
  };

  return (
    <OuterWrapper>
      <Wrapper>
        <AnimatedLogo src="/animated-logo.gif" alt="Sclanet logo" />
        <TextContainer>
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
          {hasError && (
            <ErrorMsg>
              Oops! Something went wrong.  Please try again later.
            </ErrorMsg>
          )}
          {!isSent ? (
            <form onSubmit={onSubmit}>
              <ContactInput name='email' type='email' placeholder='email address' required/>
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </form>
          ) : (
            <SuccessMsg>
              Awesome! We'll keep you posted on future updates.
            </SuccessMsg>
          )}
        </TextContainer>
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
  display: flex;
  flex-direction: column-reverse;
  min-height: 250px;
  width: 100%;
  max-width: 1440px;
  padding: 80px 24px;
  margin: 0 auto;
  margin-top: auto;


  @media screen and (min-width: 550px) {
    padding: 100px 64px;
  }

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 96px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 0 350px;
`;

const MainText = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const SecondaryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 680px;
  margin-bottom: 24px;
`;

const AnimatedLogo = styled.img`
  flex: 1 99999 150px;
  height: 100%;
  max-height: 300px;

  @media screen and (min-width: 650px) {
    min-height: 520px;
    max-height: 600px;
  }
`;

const ContactInput = styled.input`
  color: ${COLORS.purple};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  margin-bottom: 16px;
  border: 1px solid rgb(45,42,39);
  transition: all 300ms ease-in;

  &:placeholder {
    color: ${COLORS.grayText};
  }

  &:focus {
    border: 3px solid ${COLORS.purple};
    outline: ${COLORS.purple};
  }

  @media screen and (min-width: 550px) {
    max-width: 440px;
  }
`;

const SubmitBtn = styled.button`
  color: white;
  background-color: ${COLORS.purple};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid ${COLORS.purple};
  transition: all 300ms ease-in;

  &:hover {
    background-color: hsl(243.8,100%,75%);
    transform: translate(0, -3px);
    cursor: pointer;
  }

  @media screen and (min-width: 550px) {
    max-width: 440px;
  }
`;

const SuccessMsg = styled.div`
  color: white;
  background-color: hsl(243.8,100%,65%);
  height: 100%;
  width: 100%;
  max-width: 440px;
  font-size: 1.5rem;
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;
  text-align: center;
`;

const ErrorMsg = styled.div`
  color: white;
  background-color: palevioletred;
  height: 100%;
  width: 100%;
  max-width: 440px;
  font-size: 1.5rem;
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;
  text-align: center;
`

export default Footer;
