import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { Item } from '../Item/Item';

export const BackgroundList = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: 'calc(100% + 6rem)',
        backgroundColor: '#AAD1BA',
        transform: 'translateX(-3rem)',
        padding: '3rem',
      }}
    >
      <Item />
      <Item />
    </Box>
  );
};
