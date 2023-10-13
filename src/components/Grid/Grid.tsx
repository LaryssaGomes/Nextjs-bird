import React from 'react';
import Box from '../Box/Box';
import { useTheme } from 'styled-components';

export default function Grid({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 4fr)',
      }}
    >
      {children}
    </Box>
  );
}

Grid.Item = ({ children }) => {
  const theme = useTheme();
  return <Box>{children}</Box>;
};
