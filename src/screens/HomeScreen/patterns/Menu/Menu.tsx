import { styled, css, keyframes } from 'styled-components';
import Box from '@src/components/Box/Box';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode, useState } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BaseComponent } from '@src/theme/BaseComponent';
import { MenuHamburger } from './MenuHmburger';

interface MenuProps {
  styleSheet?: StyleSheet;
}
const animeteExpand = keyframes`
  100% { transform: translate(-50%, -50%) scale(80); }
`;

const animeteMin = keyframes`
  0% { transform:  translate(-50%, -50%) scale(80);; }
  100% { transform: translate(-50%, -50%) scale(0); }
`;

interface BackgroundMobileProps {
  menuIsVisible: boolean;
}

const BackgroundMobile = styled(Box)<BackgroundMobileProps>`
  position: 'relative';
  display: inline-block;
  z-index: 2;
  width: 100px;
  height: 100px;
  overflow: hidden;
  ${({ menuIsVisible }) =>
    menuIsVisible
      ? css`
          background-color: blue;
          border-radius: 50%;
          position: absolute;
          transform-origin: center;
          animation: ${animeteExpand} 2s both;
        `
      : css`
          background-color: blue;
          border-radius: 50%;
          position: absolute;
          transform-origin: center;
          animation: ${animeteMin} 2s both;
        `};
`;

export const Menu = (props: MenuProps) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const handleMenuIsVisible = () => {
    setMenuIsVisible((pre) => !pre);
  };
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        position: 'absolute',
        maxWidth: '100%',
        height: '100px',
        margin: '2rem',
      }}
    >
      <MenuHamburger
        menuIsVisible={menuIsVisible}
        handleMenuIsVisible={handleMenuIsVisible}
      />
      <BackgroundMobile menuIsVisible={menuIsVisible} />
    </Box>
  );
};
