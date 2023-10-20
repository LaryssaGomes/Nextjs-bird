import Box from '@src/components/Box/Box';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import { BackgroundList } from './patterns/BackgroundList/BackgroundList';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from 'services/firebase';

export default function HomeScreen() {
  const citiesRef = collection(db, 'aves');

  getDocs(citiesRef)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log('ID do documento:', doc.id);
        console.log('Dados do documento:', doc.data());
      });
    })
    .catch((error) => {
      console.error('Erro ao buscar documentos:', error);
    });

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
          <BoxSearch response={'ff'} />
        </Box>
      </Box>
      <Box
        styleSheet={{
          flexDirection: { xs: 'column' },
          alignItems: 'center',
        }}
      >
        <BackgroundList />
      </Box>
    </>
  );
}
