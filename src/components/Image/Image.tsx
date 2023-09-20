import { parseStyleSheet } from '@displaykit/responsive_styles';
import NextImage, { ImageProps } from 'next/image';
import { styled } from 'styled-components';

interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

const ImageComponent = styled(NextImage)<CustomImageProps>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;
const Image = ({ src, alt, styleSheet, ...props }: CustomImageProps) => {
  return (
    <ImageComponent
      src={src}
      alt={alt}
      styleSheet={styleSheet}
      loading="lazy"
      {...props}
    />
  );
};

Image.defaultProps = {
  styleSheet: {},
};

export default Image;
