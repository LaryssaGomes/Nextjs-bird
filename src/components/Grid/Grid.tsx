import React from 'react';
import Box from '../Box/Box';
import { useTheme } from 'styled-components';

interface GridProps {
  columns: number;
  spacing: string;
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Grid({
  children,
  columns,
  spacing,
  justifyContent,
  alignItems,
  styleSheet,
}: GridProps) {
  const theme = useTheme();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns || 2}, 1fr)`,
    gap: spacing || '16px',
    justifyContent: justifyContent || 'start',
    alignItems: alignItems || 'start',
  };

  return (
    <Box
      styleSheet={{
        ...gridStyle,
        ...styleSheet,
      }}
    >
      {children}
    </Box>
  );
}

interface GridItemProps {
  colSpan: number;
  rowSpan: number;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

Grid.Item = ({ children, colSpan, rowSpan, styleSheet }: GridItemProps) => {
  const theme = useTheme();

  const itemStyle = {
    gridColumn: colSpan && `span ${colSpan}`,
    gridRow: rowSpan && `span ${rowSpan}`,
  };

  return (
    <Box
      styleSheet={{
        ...itemStyle,
        ...styleSheet,
      }}
    >
      {children}
    </Box>
  );
};
