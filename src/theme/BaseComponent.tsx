import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { StyleSheet } from './StyleSheet';
import { parseStyleSheet } from '@displaykit/responsive_styles';

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
  ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  (props, ref) => {
    return (
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'styleSheet'}>
        <StyledBaseComponent ref={ref} {...props} />
      </StyleSheetManager>
    );
  },
);

BaseComponent.defaultProps = {
  styleSheet: {},
};
