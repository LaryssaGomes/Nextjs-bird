import Box from '@src/components/Box/Box';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import { BackgroundList } from './patterns/BackgroundList/BackgroundList';

export default function HomeScreen() {
  return (
    <>
      <Box
        styleSheet={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alingItems: 'center',
        }}
      >
        <Image
          styleSheet={{
            position: 'absolute',
            left: '0',
            width: { xs: '100px', md: '300px' },
          }}
          src="/images/Arara.svg"
          alt="Arara"
        />
        <Box
          styleSheet={{
            width: '45%',
            marginLeft: '4rem',
            justifyContent: 'center',
            marginTop: '4rem',
            marginBottom: '4rem',
          }}
        >
          <Text
            variant="title1"
            styleSheet={{
              marginBottom: '4rem',
            }}
          >
            Vamos aprender mais sobre aves hoje
          </Text>
          <BoxSearch />
        </Box>
      </Box>
      <BackgroundList />
    </>
  );
}
