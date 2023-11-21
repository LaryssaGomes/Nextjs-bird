import Grid from '@src/components/Grid/Grid';
import Text from '@src/components/Text/Text';
import { ContainerTitle } from '../InfoBox/InfoBox';
import Image from '@src/components/Image/Image';

import Box from '@src/components/Box/Box';
import Link from '@src/components/Link/Link';
import { styled } from 'styled-components';

interface GalleryProps {
  imgsGallery: any[];
}

const CardBox = styled.div`
  height: 400px;
  cursor: pointer;
  transition: flex 0.5s linear;
  overflow: hidden;
  flex: 1;
  border-radius: 20px;
  &:hover {
    flex: 6;
  }
  &:hover > div {
    transition: 0.5s linear;
    transform: translateY(-4rem);
  }
`;

export const Gallery = ({ imgsGallery }: GalleryProps) => {
  return (
    <>
      <ContainerTitle title="Galeria" />
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        {imgsGallery.map((item, index) => (
          <CardBox>
            <Image
              key={item.imageUrl}
              src={item.imageUrl}
              alt={item.altText}
              styleSheet={{
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                width: '100%',
              }}
            />
            <Box
              styleSheet={{
                transform: 'translateY(0rem) ',
                background: '#31754C',
                padding: '0.5rem',
                marginLeft: '1rem',
                maxWidth: '200px',
                borderRadius: '15px',
              }}
            >
              <Text
                styleSheet={{
                  color: '#fff',
                }}
              >
                Fotografo:
                <Link href="">{item.authorName}</Link>
              </Text>
            </Box>
          </CardBox>
        ))}
      </Box>
    </>
  );
};
