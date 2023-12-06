import { AppProps } from 'next/app';
import GlobalStyle from '@src/theme/GlobalStyle';
import ThemeProvider from '@src/theme/ThemeProvider';
import { Background } from '@src/screens/LayoutScreen/patterns/Background/Background';
import { Footer } from '@src/screens/LayoutScreen/patterns/Footer/Footer';
import { Menu } from '@src/screens/LayoutScreen/patterns/Menu/Menu';
import { QueryClient, QueryClientProvider } from 'react-query';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>yg7yuggggg</h1>
      <ThemeProvider>
        <GlobalStyle />
        <Background>
          <Menu />

          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
          <Footer />
        </Background>
      </ThemeProvider>
    </>
  );
}
