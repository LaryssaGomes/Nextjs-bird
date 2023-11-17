import Box from '@src/components/Box/Box';
import Grid from '@src/components/Grid/Grid';
import Icon from '@src/components/Icon/Icon';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';

interface ContainerDataProps {
  datas: {
    blocoDeInformacoes: { titulo: string; dados: any[] }[];
    dadosIniciais: string;
    referencia: string[];
  };
}
interface ContainerTitleProps {
  title: string;
}

const ContainerTitle = ({ title }: ContainerTitleProps) => {
  return (
    <Box
      styleSheet={{
        maxWidth: '150px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '1rem 2rem',
        transform: 'rotate(5deg) skew(-30deg)',
        marginTop: '3rem',
        marginBottom: '3rem',
      }}
    >
      <Text
        styleSheet={{
          color: '#31754c',
          textAlign: 'center',
          transform: 'rotate(-5deg) skew(30deg)',
        }}
      >
        {title}
      </Text>
    </Box>
  );
};

export const ContainerData = ({ datas }: ContainerDataProps) => {
  return (
    <>
      <Box styleSheet={{ marginBottom: '-1px', marginTop: '-3rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          width="100vw"
        >
          <path
            fill="#31754c"
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>

      <Box
        styleSheet={{
          backgroundColor: '#31754c',
          flexDirection: 'row',
          width: '100vw',
          minHeight: '200px',
          gap: { xs: '2rem 1rem', md: '2rem' },
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            maxWidth: { xs: '95%', md: '60vw' },
            color: '#fff',
          }}
        >
          <ContainerTitle title="Introdução" />

          {datas.dadosIniciais}

          {datas.blocoDeInformacoes.map((item) => (
            <>
              <ContainerTitle title={item.titulo} />
              {item.dados}
            </>
          ))}
          <ContainerTitle title="Referência" />
          {datas.referencia.map((item) => (
            <Link href={item} colorVariant="neutral">
              {item}
            </Link>
          ))}
          <ContainerTitle title="Galeria" />
          <Grid
            columns={6}
            spacing={''}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
            <Grid.Item colSpan={1} rowSpan={2}>
              Fotos
            </Grid.Item>
          </Grid>
        </Box>
      </Box>

      <Box styleSheet={{ transform: 'rotate(180deg)', marginTop: '-1px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          viewBox="0 0 1440 180"
        >
          <path
            fill="#31754c"
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </>
  );
};