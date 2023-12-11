import Grid from '@src/components/Grid/Grid';
import { MdInsertLink } from 'react-icons/md';
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

  @media (max-width: 767px) {
    &:hover {
      flex: 1;
    }
    & > div {
      transform: translateY(-4rem);
    }
    &:hover > div {
      transform: none;
      transform: translateY(-4rem);
    }
  }
`;

export const Gallery = ({ imgsGallery }: GalleryProps) => {
  return (
    <>
      <ContainerTitle title="Galeria" />
      <Box
        styleSheet={{
          flexDirection: { xs: 'column', md: 'row' },
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
                marginLeft: '1rem',
                maxWidth: '220px',
              }}
            >
              <Text
                styleSheet={{
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0.5rem',
                  alignItems: 'center',
                  background: '#31754C',
                  padding: '0.5rem',
                  borderRadius: '15px',
                }}
              >
                Fotografo:
                <Link href={item.authorLink} colorVariant="neutral">
                  <Box
                    styleSheet={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <MdInsertLink />
                    {item.authorName}
                  </Box>
                </Link>
              </Text>
            </Box>
          </CardBox>
        ))}
      </Box>
    </>
  );
};
