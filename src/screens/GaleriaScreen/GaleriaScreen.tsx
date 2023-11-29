import Box from '@src/components/Box/Box';
import { ContainerFotos } from './patterns/ContainerFotos/ContainerFotos';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import { BackgroundContainer } from '../HomeScreen/patterns/BackgroundContainer/BackgroundContainer';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getNameGaleria } from 'services/datoCMS';
import { BirdNotFound } from '@src/components/BirdNotFound/BirdNotFound';
import { CardSkeleton } from '@src/components/CardSkeleton/CardSkeleton';
import { styled } from 'styled-components';
import Link from '@src/components/Link/Link';
import { MdInsertLink } from 'react-icons/md';

const CardBox = styled.div`
  cursor: pointer;
  transition: flex 0.5s linear;
  overflow: hidden;
  border-radius: 20px;
  &:hover {
    transform: scale(1.2);
  }
  &:hover > p {
    display: flex;
  }
`;

export default function GaleriaScreen() {
  const [search, setSearch] = useState('');
  const {
    data: avesData,
    error,
    isLoading,
  } = useQuery(['aves-galeria', search], () => getNameGaleria(search));

  console.log({ avesData });

  const handleSearch = (value: string) => {
    setSearch(value);
  };
  return (
    <>
      <Box
        styleSheet={{
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: { xs: 'center', md: 'space-around' },
          alignItems: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
        }}
      >
        <Box
          styleSheet={{
            maxWidth: { xs: '80%', md: '70%', lg: '80%' },
          }}
        >
          <Text
            variant="title1"
            styleSheet={{
              marginBottom: { xs: '2.5rem', md: '4rem' },
              textAlign: 'justify',
            }}
          >
            Encontre lindas fotos da sua ave favorita
          </Text>
          <BoxSearch onFiltroChange={handleSearch} />
        </Box>
      </Box>
      <BackgroundContainer>
        {isLoading && (
          <CardSkeleton
            lines={5}
            styleSheet={{
              width: { xs: '200px', md: '300px', lg: '345px' },
              height: { xs: '150px', md: '170px', lg: '240px' },
            }}
          />
        )}

        {avesData == undefined ? (
          <BirdNotFound>
            Ops! Não consegui encontrar seu pássaro na minha investigação,
            parece que ele está em migração. <br />
            Tente outra ave, darei o meu melhor para encontrar.
          </BirdNotFound>
        ) : (
          Object.values(avesData).map((itemsImgs) =>
            itemsImgs?.imgs?.map((item, index) => (
              <CardBox>
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  styleSheet={{
                    borderRadius: '25px',
                    objectFit: 'cover',
                    width: { xs: '180px', md: '250px', lg: '345px' },
                    height: { xs: '250px', md: '170px', lg: '240px' },
                    flexGrow: 1,
                  }}
                />

                <Text
                  styleSheet={{
                    width: { xs: '180px', md: '250px', lg: '345px' },
                    display: 'none',
                    borderRadius: '25px',
                    backgroundColor: '#31754C',
                    color: '#fff',
                    padding: '15px',
                    transform: 'translateY(-3rem) ',
                  }}
                  variant="body1"
                >
                  Fotografo:
                  <Link
                    href={item.authorLink}
                    colorVariant="neutral"
                    styleSheet={{
                      flexDirection: 'row',
                      maxWidth: '100%',
                      gap: '8px',
                      alignItems: 'center',
                      whiteSpace: 'wrap',
                    }}
                  >
                    <MdInsertLink />
                    {item.authorName}
                  </Link>
                </Text>
              </CardBox>
            )),
          )
        )}
      </BackgroundContainer>
    </>
  );
}
