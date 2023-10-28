import { AppProps } from 'next/app';
import GlobalStyle from '@src/theme/GlobalStyle';
import ThemeProvider from '@src/theme/ThemeProvider';
import { Background } from '@src/screens/LayoutScreen/patterns/Background/Background';
import { Footer } from '@src/screens/LayoutScreen/patterns/Footer/Footer';
import { Menu } from '@src/screens/LayoutScreen/patterns/Menu/Menu';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Background>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
          <Footer />
        </Background>
      </ThemeProvider>
    </>
  );
}
