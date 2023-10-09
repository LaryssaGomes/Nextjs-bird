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
import { parseStyleSheet } from '@displaykit/responsive_styles';

const StatusMobileMenuBackground = {
  EXPANDIR: 'expandir',
  DIMINUIR: 'diminuir',
  SEM_EXECUCAO: 'sem_execucao',
};

interface MenuProps {
  styleSheet?: StyleSheet;
}

const animeteExpandBorderBottom = keyframes`
  100% {   transform: translate(-50%, -50%) scale(80); }
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
    width: 100%;
  }
`;
const animeteExpand = keyframes`
0% { transform: translate(-50%, -50%) scale(0);}
  100% {   transform: translate(-50%, -50%) scale(40); }
`;

const animeteMin = keyframes`
  0% { transform:  translate(-50%, -50%) scale(40); }
  100% { transform: translate(-50%, -50%) scale(0); }
`;

interface BackgroundMobileProps {
  animationStatus: string;
  styleSheet: StyleSheet;
}
const BackgroundMobile = styled(Box)<BackgroundMobileProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #31754c;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
  ${({ animationStatus }) => {
    if (animationStatus === StatusMobileMenuBackground.EXPANDIR) {
      return css`
        background-color: #7ab793;
        border-radius: 50%;
        animation: ${animeteExpand} 3s both;
      `;
    } else if (animationStatus === StatusMobileMenuBackground.DIMINUIR) {
      return css`
        background-color: #7ab793;
        border-radius: 50%;
        animation: ${animeteMin} 1s both;
      `;
    }
  }};
`;

export const Menu = (props: MenuProps) => {
  const [animationStatus, setAnimationStatus] = useState(
    StatusMobileMenuBackground.SEM_EXECUCAO,
  );

  const handleMenuIsVisible = () => {
    if (animationStatus === StatusMobileMenuBackground.SEM_EXECUCAO) {
      setAnimationStatus(StatusMobileMenuBackground.EXPANDIR);
    } else if (animationStatus === StatusMobileMenuBackground.EXPANDIR) {
      setAnimationStatus(StatusMobileMenuBackground.DIMINUIR);
    } else {
      setAnimationStatus(StatusMobileMenuBackground.EXPANDIR);
    }
  };

  const theme = useTheme();

  return (
    <>
      <BackgroundMobile
        styleSheet={{
          width: '100vw',
          height: '100vh',
          display:
            animationStatus !== StatusMobileMenuBackground.SEM_EXECUCAO
              ? 'flex'
              : 'none',
        }}
        animationStatus={animationStatus}
      />
      <Box
        styleSheet={{
          width: '100%',
          height: '100px',
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
          menuIsVisible={
            animationStatus === StatusMobileMenuBackground.EXPANDIR
          }
          handleMenuIsVisible={handleMenuIsVisible}
        />
        <Box
          tag="ul"
          styleSheet={{
            width: { xs: 'calc(100vw - 100px)', md: '100%' },
            height: '100px',
            display:
              animationStatus === StatusMobileMenuBackground.EXPANDIR
                ? 'flex'
                : { xs: 'none', md: 'flex' },
            flexDirection: { xs: 'column', md: 'row' },
            marginTop: { xs: '100px', md: '0px' },
            gap: '3rem 0rem ',
            alignItems: { xs: 'center', md: '' },
            alignContent: 'end',
            justifyContent: { xs: '', md: 'space-around' },
          }}
        >
          <li>
            <Text variant="body1">
              <TextLink>Página inicial</TextLink>
            </Text>
          </li>
          <li>
            <Text variant="body1">
              <TextLink>Sobre</TextLink>
            </Text>
          </li>
          <li>
            <Text variant="body1">
              <TextLink>Contato</TextLink>
            </Text>
          </li>
        </Box>
      </Box>
    </>
  );
};
