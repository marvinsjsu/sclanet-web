import React, { useState } from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Banner from '../components/banner';
import ProductsSection from '../components/products-section';
import AboutSection from '../components/about-section';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import GlobalStyle from '../components/global-style';

import { SECTIONS } from '../constants';

export default function Home() {

  const productsRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const [currSection, setCurrSection] = useState(null);

  const scrollOptions = {
    behavior: 'smooth',
    inline: 'center',
    block: 'start',
  };

  const onClickContact = (evt) => {
    evt.preventDefault();
    contactRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.CONTACT);
  };

  const onClickProducts = (evt) => {
    evt.preventDefault();
    productsRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.PRODUCTS);
  };

  const onClickAbout = (evt) => {
    evt.preventDefault();
    aboutRef.current.scrollIntoView(scrollOptions);
    setCurrSection(SECTIONS.ABOUT);
  };

  return (
    <>
      <Head>
        <title>Sclanet - Redefining Industries</title>
        <meta name="description" content="Sclanet - redefining industries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Header
        onClickProducts={onClickProducts}
        onClickAbout={onClickAbout}
        onClickContact={onClickContact}      
      />
      <Banner />
      <ProductsSection ref={productsRef}/>
      {/* <BenefitsSection /> */}
      <AboutSection ref={aboutRef}/>
      <Footer ref={contactRef}/>
      <Copyright />
      <GlobalStyle />
    </>
  )
}
