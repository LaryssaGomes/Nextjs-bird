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
        position: 'relative',
        width: '100svw',
        backgroundColor: theme.colors.neutral.x050,
        padding: '0rem 3rem',
        zIndex: -1,
      }}
    >
      <Image
        styleSheet={{
          position: 'absolute',
          left: '0',
          width: { xs: '100px', md: '200px' },
          zIndex: -2,
        }}
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
      <Box
        styleSheet={{
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          styleSheet={{
            maxWidth: '1280px',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
