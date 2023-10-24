import Box from '@src/components/Box/Box';
import ButtonBase from '@src/components/Button/ButtonBase';
import Image from '@src/components/Image/Image';
import Text from '@src/components/Text/Text';

export default function Pagina404() {
  return (
    <Box
      styleSheet={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#DDEBE3',
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        styleSheet={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          styleSheet={{
            flexDirection: 'row',
            color: '#31754C',
            alignItems: 'flex-end',
            alignContent: 'flex-end',
          }}
        >
          <Text
            styleSheet={{
              fontFamily: 'RocknRoll One',
              fontSize: { xs: '150px', md: '300px', lg: '350px' },
              lineHeight: '1',
            }}
          >
            4
          </Text>
          
            styleSheet={{
              maxWidth: { xs: '150px', md: '300px', lg: '350px' },
            }}
            src="/images/404-ninho.svg"
            alt="ninho de passáro"
          />
          <Text
            styleSheet={{
              fontFamily: 'RocknRoll One',
              fontSize: { xs: '150px', md: '300px', lg: '350px' },
              lineHeight: '1',
            }}
          >
            4
          </Text>
        </Box>
        <Text
          variant="body1"
          styleSheet={{
            color: '#31754C',
            wordBreak: 'break-word',
            padding: {
              xs: '1rem 0rem 1rem 0rem',
            },
            zIndex: 11,
          }}
        >
          Ooops! Parece que os pássaros já migraram para outra página!
        </Text>
        <ButtonBase
          styleSheet={{
            justifyContent: 'center',
            background: '#31754C',
            padding: { xs: '0.4rem', md: '0.8rem', lg: '1rem' },
            transform: 'skew(-20deg)',
            borderRadius: '5px',
          }}
        >
          <Text
            styleSheet={{
              color: '#fff',
              transform: 'skew(20deg)',
              textAlign: 'center',
              fontWeight: '700',
            }}
            variant="body1"
          >
            Volta Para Home
          </Text>
        </ButtonBase>
      </Box>
    </Box>
  );
}
