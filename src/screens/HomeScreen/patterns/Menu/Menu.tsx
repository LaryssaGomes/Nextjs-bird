import { styled, css, keyframes } from 'styled-components';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode, useState } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BaseComponent } from '@src/theme/BaseComponent';

import Link from '@src/components/Link/Link';
import { animated, useSpring } from 'react-spring';
import { MenuHamburger } from './MenuHmburger';

interface MenuProps {
  styleSheet?: StyleSheet;
}
const animeteExpand = keyframes`
  100% {   transform: translate(-50%, -50%) scale(80); }
`;

const animeteMin = keyframes`
  0% { transform:  translate(-50%, -50%) scale(80);; }
  100% { transform: translate(-50%, -50%) scale(0); }
`;

interface BackgroundMobileProps {
  menuIsVisible: boolean;
}

const animeteExpandBorderBottom = keyframes`
  100% {   transform: translate(-50%, -50%) scale(80); }
`;

const BackgroundMobile = styled(Box)<BackgroundMobileProps>`
  position: 'relative';
  display: inline-block;
  z-index: 2;
  width: 100px;
  height: 100px;
  background-color: #31754c;
  ${({ menuIsVisible }) =>
    menuIsVisible
      ? css`
          background-color: #7ab793;
          border-radius: 50%;
          position: absolute;
          transform-origin: center;
          animation: ${animeteExpand} 1s both;
        `
      : css`
          background-color: #7ab793;
          border-radius: 50%;
          position: absolute;
          transform-origin: center;
          animation: ${animeteMin} 1s both;
        `};
`;

const TextLink = styled(animated.a)`
  position: 'relative';
  z-index: 4;
  cursor: pointer;
  display: inline-block;
  &:after {
    content: ' ';
    display: block;
    width: 0%;
    height: 3px;
    background-color: #31754c;
    transition: all 0.5s;
  }

  &:hover:after {
    width: 100%; /* Expandir a largura quando o mouse passar por cima */
  }
`;

const BoxNav = styled(Box)``;

export const Menu = (props: MenuProps) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const handleMenuIsVisible = () => {
    setMenuIsVisible((pre) => !pre);
  };
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);
  const swingAnimation = useSpring({
    width: '100%', // Altere a largura para 100% quando o mouse passar por cima
    from: { width: '0%' }, // Comece com uma largura de 0%
    config: { duration: 250 },
  });
  return (
    <Box
      styleSheet={{
        position: 'absolute',
        width: '100%',
        height: '100px',
        top: '0px',
        display: 'flex',
        flexDirection: { xs: 'row' },
        alignItems: { xs: 'center', md: '' },
        alignContent: 'end',
        justifyContent: { xs: '', md: 'flex-end' },
      }}
      tag="header"
    >
      <MenuHamburger
        styleSheet={{
          position: 'absolute',
          display: { xs: 'flex', md: 'none' },
        }}
        menuIsVisible={menuIsVisible}
        handleMenuIsVisible={handleMenuIsVisible}
      />
      <Box
        tag="ul"
        styleSheet={{
          width: { xs: '100%', md: '60%' },
          height: '100px',
          display: menuIsVisible ? 'flex' : { xs: 'none', md: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: { xs: '100px', md: '0px' },
          gap: '3rem 0rem ',
          alignItems: { xs: 'center', md: '' },
          alignContent: 'end',
          justifyContent: { xs: '', md: 'space-around' },
        }}
      >
        <li>
          <Text variant="title2">
            <TextLink>Página inicial</TextLink>
          </Text>
        </li>
        <li>
          <Text variant="title2">
            <TextLink>Sobre</TextLink>
          </Text>
        </li>
        <li>
          <Text variant="title2">
            <TextLink>Contato</TextLink>
          </Text>
        </li>
      </Box>

      <BackgroundMobile menuIsVisible={menuIsVisible} />
    </Box>
  );
};
