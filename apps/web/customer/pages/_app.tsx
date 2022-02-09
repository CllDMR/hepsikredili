import { AppProps } from 'next/app';
import './index.css';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default CustomApp;
