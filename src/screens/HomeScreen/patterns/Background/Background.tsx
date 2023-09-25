import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';

interface BackgroundProps {
  children: ReactNode;
  styleSheet?: StyleSheet;
}

export const Background = ({ children }: BackgroundProps) => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: '100vw',
        height: '100vh',
        paddin: '1rem 2rem',
        backgroundColor: theme.colors.neutral.x050,
      }}
    >
      <Image
        styleSheet={{ width: { xs: '100px', md: '200px' } }}
        src="/images/Backgound-planta.svg"
        alt="planta"
      />
      <Image
        styleSheet={{
          position: 'absolute',
          top: '25vh',
          right: '0',
          width: { xs: '100px', md: '200px' },
          transform: 'rotate(180deg)',
        }}
        src="/images/Backgound-planta.svg"
        alt="planta"
      />

      {children}
    </Box>
  );
};
