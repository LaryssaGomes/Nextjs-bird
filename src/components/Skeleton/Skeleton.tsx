import { styled, css, keyframes } from 'styled-components';
import Box from '../Box/Box';
import { lighten } from 'polished';

type ContainerProps = Pick<SkeletonProps, 'spacings'>;
const Container = styled.div<ContainerProps>`
  ${({ spacings }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;
const animation = keyframes`
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 135% 0%;
  }
`;
type ContentProps = Pick<SkeletonProps, 'height'>;
const Content = styled.div<ContentProps>`
  ${({ height }) => css`
    width: 100%;
    height: 40px;
    opacity: 0.6;
    border-radius: 15px;
    cursor: progress; /* Substitua isso por "pointer" se desejar o cursor padrão */
    background: linear-gradient(
      -90deg,
      #91aab4 0%,
      ${lighten(0.2, '#000')} 50%,
      #91aab4 100%
    );
    background-size: 400% 400%;
  `}
  animation: ${animation} 1.2s ease-in-out infinite;
`;

interface SkeletonProps {
  lines?: number;
  height?: number;
  spacings?: number;
}
export const Skeleton = ({
  lines = 5,
  height = 20,
  spacings = 6,
}: SkeletonProps) => {
  return (
    <Container>
      {[...Array(lines)].map((_, index) => (
        <Content key={index} height={20}></Content>
      ))}
    </Container>
  );
};
