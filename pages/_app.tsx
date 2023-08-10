import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
       <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
