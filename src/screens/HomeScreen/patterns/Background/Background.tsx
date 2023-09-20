import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';

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
        backgroundColor: theme.colors.neutral.x050,
      }}
    >
      <Image
        width={100}
        height={100}
        src="/images/Backgound-planta.svg"
        alt="planta"
      />
      {children}
    </Box>
  );
};
