import { AppProps } from 'next/app';
import '../styles/global.css';
// import '../__style/global.style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
