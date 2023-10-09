import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import ButtonBase from '@src/components/Button/ButtonBase';

export const Item = () => {
  return (
    <Box
      styleSheet={{
        backgroundColor: '#ECFFF4',
        padding: '1rem 1rem 1rem 1rem',
        borderRadius: '20px',
        flexDirection: 'row',
        width: '30%',
      }}
    >
      <Image
        styleSheet={{
          width: { xs: '50%', md: '30%', lg: '200px' },
          height: '200px',
          borderRadius: '36px',
          objectFit: 'cover',
        }}
        src="/images/aves.png"
        alt="Arara"
      />

      <Box
        styleSheet={{
          width: '55%',
          marginLeft: '2rem',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Text
            variant="body1"
            styleSheet={{
              marginBottom: '1rem',
            }}
          >
            Arara
          </Text>
          <Text
            styleSheet={{
              marginBottom: '1rem',
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ips...
          </Text>
        </Box>

        <ButtonBase
          styleSheet={{
            alignSelf: 'center',
            justifyContent: 'center',
            background: '#31754C',
            padding: { xs: '0.8rem', md: '1rem' },
            transform: 'skew(20deg)',
            borderRadius: '5px',
          }}
        >
          <Text
            styleSheet={{
              color: '#fff',
              transform: 'skew(-20deg)',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            + ENCONTRAR
          </Text>
        </ButtonBase>
      </Box>
    </Box>
  );
};
