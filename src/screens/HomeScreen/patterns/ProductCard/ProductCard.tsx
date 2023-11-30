import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';
import ButtonBase from '@src/components/Button/ButtonBase';
import Link from '@src/components/Link/Link';

const formatNome = (name: string) => {
  name = name.normalize('NFD').replaceAll('-', ' ');
  return name;
};

interface ProductCardProps {
  introducao: string;
  img: {
    img: string;
    alt?: string;
  };
  nomeUnico: string;
}

export const ProductCard = ({
  introducao,
  img,
  nomeUnico,
}: ProductCardProps) => {
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
        src={img.img}
        alt={img?.alt}
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
              width: { xs: '150px', md: '140px', lg: '150px' },
              overflow: 'hidden',
              whiteSpace: 'break-spaces',
            }}
          >
            {formatNome(nomeUnico)}
          </Text>
          <Text
            styleSheet={{
              marginBottom: '1rem',
              width: { xs: '150px', md: '140px', lg: '150px' },
              height: { xs: '80px', md: '80px', lg: '100px' },
              textAlign: 'justify',
              overflow: 'hidden',
              whiteSpace: 'break-spaces',
            }}
          >
            {introducao}
          </Text>
        </Box>
        <Link
          href={`aves/${nomeUnico}`}
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
        </Link>
      </Box>
    </Box>
  );
};
