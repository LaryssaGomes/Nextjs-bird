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
        padding: { xs: '1rem', md: '1rem 1.5rem 1rem 1rem' },
        borderRadius: '20px',
        flexDirection: { xs: 'column', md: 'row' },
        flexgrow: 1,
        alignItems: { xs: 'center', md: '' },
      }}
    >
      <Image
        styleSheet={{
          marginTop: { xs: '-2rem', md: '0px' },
          width: { xs: '100px', md: '130px', lg: '150px' },
          height: { xs: '100px', md: '170px', lg: '200px' },
          borderRadius: '25px',
          objectFit: 'cover',
        }}
        src="/images/aves.png"
        alt="Arara"
      />

      <Box
        styleSheet={{
          marginLeft: { xs: '', md: '1.5rem' },
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Text
            variant="title3"
            styleSheet={{
              marginTop: { xs: '1rem', md: '0px' },
              marginBottom: '1rem',
              textAlign: { xs: 'center', md: 'start' },
            }}
          >
            Arara
          </Text>
          <Text
            styleSheet={{
              marginBottom: '1rem',
              maxWidth: { xs: '150px', md: '140px', lg: '200px' },
              height: { xs: '80px', md: '80px', lg: '100px' },
              width: '100%',
              overflow: 'hidden',
              textAlign: 'justify',
              textOverflow: 'ellipsis',
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ips It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ips It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ips...
          </Text>
        </Box>

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
            VER +
          </Text>
        </ButtonBase>
      </Box>
    </Box>
  );
};
