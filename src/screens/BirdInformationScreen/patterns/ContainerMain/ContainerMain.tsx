import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import Text from '@src/components/Text/Text';
import { useTheme } from 'styled-components';

interface ContainerMainProps {
  img: string;
  nomeUnico: string;
  alt: string;
}
function formatarString(inputString) {
  // Substituir todos os hífens por espaços em branco
  var formattedString = inputString.replace(/-/g, ' ');

  // Capitalizar a primeira letra de cada palavra
  formattedString = formattedString.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });

  return formattedString;
}

export const ContainerMain = ({ img, nomeUnico, alt }: ContainerMainProps) => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: { xs: 'space-between', md: 'space-between' },
        alignItems: 'center',
        marginTop: '3rem',
        marginBottom: '3rem',
      }}
    >
      <Box
        styleSheet={{
          width: { xs: '50%', md: '40%', lg: '30%' },
          flexDirection: { md: 'row' },
          marginLeft: { xs: '0rem', md: '3rem', lg: '3rem' },
          position: 'relative',
          alignItems: { xs: 'center' },
          borderRadius: '20px',
          transform: { xs: 'unset', md: 'rotate(5deg)' },
        }}
      >
        <Image
          styleSheet={{
            width: '100%',
            borderRadius: '20px',
          }}
          src={img}
          alt={alt}
        />
        <Box
          styleSheet={{
            width: { xs: '100%', md: 'unset' },
            borderRadius: '10px',
            background: '#31754C',
            color: '#fff',
            alignSelf: 'flex-end',
            position: 'absolute',
            right: { xs: 'unset', md: '-5%' },
            bottom: { xs: '-10%', md: '6%' },
            padding: '1rem',
            transform: { xs: 'unset', md: 'skew(-15deg)' },
          }}
        >
          <Text
            variant="title2"
            styleSheet={{
              width: { xs: '100%', md: '150px' },
              color: '#fff',
              transform: { xs: '', md: 'skew(15deg)' },
              textTransform: 'uppercase',
              textAlign: { xs: 'center', md: 'justify' },
            }}
          >
            OI, EU SOU O {formatarString(nomeUnico)}
          </Text>
        </Box>
      </Box>

      <Box
        styleSheet={{
          maxWidth: { xs: '85%', md: '40%', lg: '50%' },
          marginRight: { xs: '0rem', md: '3rem', lg: '3rem' },
          padding: { xs: '1rem', md: '1rem' },
          borderRadius: '20px',
          transform: 'skew(-15deg) rotate(2deg)',
          background: '#31754C',
          marginBottom: { xs: '2rem', md: '0rem' },
        }}
      >
        <Text
          variant="title1"
          styleSheet={{
            color: '#fff',
            textAlign: { xs: 'center', md: 'justify' },
            padding: { xs: '1rem', md: '2rem' },
            transform: 'skew(15deg) rotate(-2deg)',
          }}
        >
          Vamos ver + sobre o “{formatarString(nomeUnico)}”.
        </Text>
      </Box>
    </Box>
  );
};
