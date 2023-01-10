import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    const removeFouc = (foucElement:Element) => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
    };
  
    removeFouc(document.documentElement);
  }, []);

  return <Component {...pageProps} />
}
