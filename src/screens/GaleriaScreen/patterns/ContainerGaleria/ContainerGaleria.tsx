import Box from '@src/components/Box/Box';
import { useTheme } from '@src/theme/ThemeProvider';
import Text from '@src/components/Text/Text';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';

export const ContainerGaleria = () => {
  const theme = useTheme();
  return (
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
        <BoxSearch />
      </Box>
    </Box>
  );
};
