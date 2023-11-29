import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from '@displaykit/responsive_styles';

interface CardSkeletonProps {
  styleSheet: StyleSheet;
  lines: number;
}
interface SkeletonProps {
  styleSheet: StyleSheet;
}

const animation = keyframes`
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 135% 0%;
  }
`;

const Skeleton = styled.div<SkeletonProps>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}

  opacity: 0.6;
  border-radius: 15px;
  cursor: progress;
  background: linear-gradient(
    -90deg,
    #91aab4 0%,
    ${lighten(0.2, '#000')} 50%,
    #91aab4 100%
  );
  background-size: 400% 400%;

  border-radius: 20px;
  flex-grow: 1;

  animation: ${animation} 1.2s ease-in-out infinite;
`;

export const CardSkeleton = ({ lines, styleSheet }: CardSkeletonProps) => {
  return (
    <>
      {[...Array(lines)].map((_, index) => (
        <Skeleton
          styleSheet={{
            ...styleSheet,
          }}
        />
      ))}
    </>
  );
};
