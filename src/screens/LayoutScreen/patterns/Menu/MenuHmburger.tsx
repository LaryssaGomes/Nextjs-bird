import { parseStyleSheet } from '@displaykit/responsive_styles';
import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import ButtonBase from '@src/components/Button/ButtonBase';
import { BaseComponent } from '@src/theme/BaseComponent';
import { StyleSheet } from '@src/theme/StyleSheet';
import styled, { keyframes, css } from 'styled-components';

const animeteLine1 = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(18px) rotate(0deg); }
  100% { transform: translateY(18px) rotate(-45deg); }
`;

const animeteLine2 = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(-45deg); }
`;

const animeteLine3 = keyframes`
  0% {transform: translateY(0px) rotate(0deg); }
  50% {transform: translateY(-18px) rotate(0deg); }
  100% {transform: translateY(-18px) rotate(45deg); }
`;

const revAnimeteLine1 = keyframes`
  0% { transform: translateY(18px) rotate(-45deg); }
  50% { transform: translateY(18px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const revAnimeteLine2 = keyframes`
   0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const revAnimeteLine3 = keyframes`
  0% { transform: translateY(-18px) rotate(45deg); }
  50% { transform: translateY(-18px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

interface MenuProps {
  menuIsVisible: boolean;
  styleSheet: StyleSheet;
}
const MenuIcon = styled(BaseComponent)<MenuProps>`
  cursor: pointer;
  position: relative;
  z-index: 5;

  ${({ styleSheet }) => parseStyleSheet(styleSheet)}

  span {
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
    background: #31754d;
    width: 50px;
    height: 8px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  span .line-2 {
    background: 'red';
  }
  ${({ menuIsVisible }) =>
    menuIsVisible
      ? css`
          .line-1 {
            animation: ${animeteLine1} 0.7s both;
          }

          .line-2 {
            animation: ${animeteLine2} 0.7s both;
          }

          .line-3 {
            animation: ${animeteLine3} 0.7s both;
          }
        `
      : css`
          .line-1 {
            animation: ${revAnimeteLine1} 0.7s both;
          }

          .line-2 {
            animation: ${revAnimeteLine2} 0.7s both;
          }

          .line-3 {
            animation: ${revAnimeteLine3} 0.7s both;
          }
        `}
`;

interface MenuHamburgerProps {
  styleSheet?: StyleSheet;
  menuIsVisible: boolean;
  handleMenuIsVisible: () => void;
}

export const MenuHamburger = ({
  menuIsVisible,
  handleMenuIsVisible,
  styleSheet,
}: MenuHamburgerProps) => {
  return (
    <MenuIcon
      onClick={handleMenuIsVisible}
      menuIsVisible={menuIsVisible}
      styleSheet={styleSheet}
    >
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
    </MenuIcon>
  );
};
