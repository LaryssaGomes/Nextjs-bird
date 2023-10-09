import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { Item } from '../Item/Item';

export const BackgroundList = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        styleSheet={{
          backgroundColor: '#AAD1BA',
          flexDirection: 'row',
          gap: '2rem',
        }}
      >
        <Item />
        <Item />
      </Box>
    </>
  );
};
