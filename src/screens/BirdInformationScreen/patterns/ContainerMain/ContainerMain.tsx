import Box from '@src/components/Box/Box';
import { useTheme } from 'styled-components';

interface ContainerMainProps {
  img: string;
  nomeUnico: string;
  alt: string;
}

export const ContainerMain = ({ img, nomeUnico, alt }: ContainerMainProps) => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: { xs: 'center', md: 'space-around' },
        alignItems: 'center',
        marginTop: '3rem',
        marginBottom: '3rem',
      }}
    >
  
    </Box>
  );
};
