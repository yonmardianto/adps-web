import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
