import React from 'react';
import Box from '../Box/Box';
import { useTheme } from 'styled-components';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BaseComponent } from '@src/theme/BaseComponent';

interface GridProps {
  columns: number;
  spacing?: string;
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
  tag?: 'string';
}

export default function Grid({
  children,
  columns,
  spacing,
  justifyContent,
  alignItems,
  styleSheet,
  tag,
}: GridProps) {
  const theme = useTheme();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '50px 100px 50px 150px',
    gap: spacing || '16px',
    justifyContent: justifyContent || 'start',
    alignItems: alignItems || 'start',
  };

  return (
    <BaseComponent
      as="div"
      styleSheet={{
        ...gridStyle,
        ...styleSheet,
      }}
    >
      {children}
    </BaseComponent>
  );
}

interface GridItemProps {
  colSpan?: number;
  rowSpan?: number;
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
