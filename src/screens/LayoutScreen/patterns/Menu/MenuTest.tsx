import { styled, css, keyframes } from 'styled-components';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode, useState } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { animated, useSpring } from 'react-spring';
import { MenuHamburger } from './MenuHmburger';
import { LuBird } from 'react-icons/lu';
import { parseStyleSheet } from '@displaykit/responsive_styles';

const Header = styled.header`
  padding-inline: 16px;
  width: 100vw;
  height: 70px;
`;

interface NavProps {
  isActive: boolean;
}

const Nav = styled.nav<NavProps>`
  max-width: 1280px;
  height: 70px;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: space-between;

  ${(props) =>
    props.isActive &&
    css`
      ul {
        clip-path: circle(1500px at 90% -15%);
        pointer-events: all;

        a {
          opacity: 1;
        }
      }

      button {
        position: fixed;
        top: 26px;
        right: 16px;
        border-top-color: transparent;

        &::before {
          transform: rotate(135deg);
        }

        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
      }
    `};
`;

const Logo = styled.a`
  color: #31754c;
  font-size: 48px;
  z-index: 2;
`;

const NavList = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-between;
  list-style: none;

  a {
    font-size: 18px;
    color: #fff;
    padding-block: 16px;
  }

  @media (max-width: 750px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: #7ab793;
    clip-path: circle(100px at 90% -15%);
    transition: 1s ease-out;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0;

    pointer-events: none;

    a {
      font-size: 24px;
      opacity: 0;
    }

    li:nth-child(1) a {
      transition: 0.5s 0.2s;
    }

    li:nth-child(2) a {
      transition: 0.5s 0.4s;
    }

    li:nth-child(3) a {
      transition: 0.5s 0.6s;
    }
  }
`;

const TextLink = styled.a`
  position: 'relative';
  z-index: 5;
  cursor: pointer;
  display: inline-block;
  color: #31754c;

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

export const MenuTeste = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  return (
    <Box
      tag="header"
      styleSheet={{
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '1280px',
        width: '100%',

        justifyContent: 'center',
        padding: { xs: '2rem 3rem 2rem 3rem', md: '1rem' },
      }}
    >
      <Nav isActive={isActive}>
        <Logo>
          <LuBird />
        </Logo>
        <MenuHamburger
          styleSheet={{
            display: { xs: 'flex', md: 'none' },
            marginLeft: { xs: '2rem', md: '0rem' },
          }}
          menuIsVisible={isActive}
          handleMenuIsVisible={() => setIsActive(!isActive)}
        />
        <NavList>
          <TextLink href="/">
            <Text variant="body1"> Home</Text>
          </TextLink>
          <TextLink href="galeria">
            <Text variant="body1">Galeria</Text>
          </TextLink>
        </NavList>
      </Nav>
    </Box>
  );
};
