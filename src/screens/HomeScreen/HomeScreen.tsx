import Box from '@src/components/Box/Box';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import { BackgroundContainer } from './patterns/BackgroundContainer/BackgroundContainer';
import { useQuery } from 'react-query';
import { getNameAves } from 'services/datoCMS';
import { useState } from 'react';
import { ProductCard } from './patterns/ProductCard/ProductCard';
import { BirdNotFound } from '../../components/BirdNotFound/BirdNotFound';
import { CardSkeleton } from '@src/components/CardSkeleton/CardSkeleton';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const {
    data: avesData,
    error,
    isLoading,
  } = useQuery(['aves', search], () => getNameAves(search));

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
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '50%', md: '30%', lg: '30%' },
            marginTop: { xs: '2rem', md: '' },
            marginBottom: { xs: '-1rem', md: '-2rem', lg: '-3.8rem' },
            alignItems: 'flex-end',
            maxWidth: '350px',
          }}
          src="/images/Home.png"
          alt="Arara"
        />
        <Box
          styleSheet={{
            maxWidth: { xs: '80%', md: '50%', lg: '50%' },
          }}
        >
          <Text
            variant="title1"
            styleSheet={{
              marginBottom: { xs: '2.5rem', md: '4rem' },
              textAlign: 'justify',
            }}
          >
            Vamos aprender mais sobre aves hoje
          </Text>
          <BoxSearch onFiltroChange={handleSearch} />
        </Box>
      </Box>
      <Box
        styleSheet={{
          flexDirection: { xs: 'column' },
          alignItems: 'center',
        }}
      >
        <BackgroundContainer>
          {isLoading && (
            <CardSkeleton
              lines={5}
              styleSheet={{
                width: { xs: '140px', md: '250px', lg: '345px' },
                height: { xs: '250px', md: '170px', lg: '240px' },
              }}
            />
          )}
          {avesData?.length == 0 ? (
            <BirdNotFound>
              Ops! Não consegui encontrar seu pássaro na minha investigação,
              parece que ele está em migração. <br />
              Tente outra ave, darei o meu melhor para encontrar.
            </BirdNotFound>
          ) : (
            avesData?.map((item) => (
              <ProductCard
                nomeUnico={item.nomeunico}
                introducao={item.introducao}
                img={item.img}
              />
            ))
          )}
        </BackgroundContainer>
      </Box>
    </>
  );
}
