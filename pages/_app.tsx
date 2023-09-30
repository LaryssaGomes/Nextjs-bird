import { AppProps } from 'next/app';
import GlobalStyle from '@src/theme/GlobalStyle';
import ThemeProvider from '@src/theme/ThemeProvider';
import { Background } from '@src/screens/LayoutScreen/patterns/Background/Background';
import { Footer } from '@src/screens/LayoutScreen/patterns/Footer/Footer';
import { Menu } from '@src/screens/LayoutScreen/patterns/Menu/Menu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Background>
          <Menu />
          <Component {...pageProps} />
          <Footer />
        </Background>
      </ThemeProvider>
    </>
  );
}
