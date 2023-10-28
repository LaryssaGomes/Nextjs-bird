import { styled, css } from 'styled-components';
import Box from '../Box/Box';

type ContainerProps = Pick<SkeletonProps, 'spacings'>;
const Container = styled.div<ContainerProps>`
  ${({ spacings }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $(spacings) px;
  `}
`;

type ContentProps = Pick<SkeletonProps, 'height'>;
const Content = styled.div<ContentProps>`
  ${({ height }) => css`
    width: 100%;
    height: ${height}px;

    opacity: 0.6;
    border-radius: 15px;
    cursor: progress;
  `}
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
