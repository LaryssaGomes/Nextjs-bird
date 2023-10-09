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
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: { xs: 'center', md: 'space-around' },
          alignItems: 'center',
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '50%', md: '30%', lg: '30%' },
            marginTop: { xs: '2rem', md: '' },
            marginBottom: { xs: '-1rem', md: '-2rem', lg: '-3rem' },
            alignItems: 'flex-end',
            maxWidth: '350px',
          }}
          src="/images/Home.png"
          alt="Arara"
        />
        <Box
          styleSheet={{
            maxWidth: { xs: '100%', md: '60%', lg: '50%' },
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
          <BoxSearch />
        </Box>
      </Box>
      <Box
        styleSheet={{
          flexDirection: { xs: 'column' },
          alignItems: 'center',
        }}
      >
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100vw"
            viewBox="0 0 2769 171"
          >
            <path
              d="M0 115.583L51.3419 94.0512C102.491 72.2885 205.752 29.5713 307.667 10.9258C410.158 -7.37334 513.419 -1.60074 615.333 20.162C717.825 41.6938 821.085 78.6384 923 84.8151C1025.49 90.7609 1128.75 66.5159 1230.67 47.8704C1333.16 29.5713 1436.42 16.8716 1538.33 26.2809C1640.82 35.3439 1744.09 66.5159 1846 66.3428C1948.49 66.5159 2051.75 35.3439 2153.67 35.5171C2256.16 35.3439 2359.42 66.5159 2461.33 78.6384C2563.82 90.7609 2667.09 84.9883 2717.08 81.6979L2769 78.6384V171H2717.66C2666.51 171 2563.25 171 2461.33 171C2358.84 171 2255.58 171 2153.67 171C2051.18 171 1947.91 171 1846 171C1743.51 171 1640.25 171 1538.33 171C1435.84 171 1332.58 171 1230.67 171C1128.18 171 1024.91 171 923 171C820.509 171 717.248 171 615.333 171C512.842 171 409.581 171 307.667 171C205.175 171 101.915 171 51.9187 171H0V115.583Z"
              fill="#AAD1BA"
            />
          </svg>
        </Box>

        <BackgroundList />
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100vw"
            viewBox="0 0 2769 171"
          >
            <path
              d="M0 115.583L51.3419 94.0512C102.491 72.2885 205.752 29.5713 307.667 10.9258C410.158 -7.37334 513.419 -1.60074 615.333 20.162C717.825 41.6938 821.085 78.6384 923 84.8151C1025.49 90.7609 1128.75 66.5159 1230.67 47.8704C1333.16 29.5713 1436.42 16.8716 1538.33 26.2809C1640.82 35.3439 1744.09 66.5159 1846 66.3428C1948.49 66.5159 2051.75 35.3439 2153.67 35.5171C2256.16 35.3439 2359.42 66.5159 2461.33 78.6384C2563.82 90.7609 2667.09 84.9883 2717.08 81.6979L2769 78.6384V171H2717.66C2666.51 171 2563.25 171 2461.33 171C2358.84 171 2255.58 171 2153.67 171C2051.18 171 1947.91 171 1846 171C1743.51 171 1640.25 171 1538.33 171C1435.84 171 1332.58 171 1230.67 171C1128.18 171 1024.91 171 923 171C820.509 171 717.248 171 615.333 171C512.842 171 409.581 171 307.667 171C205.175 171 101.915 171 51.9187 171H0V115.583Z"
              fill="#AAD1BA"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
}
