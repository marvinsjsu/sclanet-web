import Head from 'next/head'
import { Inter } from '@next/font/google'

// import styled from 'styled-components';

import Header from '../components/header';
// import MainBanner from '../components/main-banner';
import Banner from '../components/banner';
import ProductsSection from '../components/products-section';
// import BenefitsSection from '../components/benefits-section';
import AboutSection from '../components/about-section';
import Footer from '../components/footer';
import GlobalStyle from '../components/global-style';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <Header />
      <Banner />
      <ProductsSection />
      {/* <BenefitsSection /> */}
      <AboutSection />
      <Footer />
      <GlobalStyle />
    </>
  )
}
