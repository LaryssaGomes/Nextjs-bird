import Box from '@src/components/Box/Box';
import Grid from '@src/components/Grid/Grid';
import Icon from '@src/components/Icon/Icon';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';

interface InfoBoxProps {
  children: ReactNode;
}
interface ContainerTitleProps {
  title: string;
}

export const ContainerTitle = ({ title }: ContainerTitleProps) => {
  const theme = useTheme();
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
          color: theme.colors.primary.main,
          textAlign: 'center',
          transform: 'rotate(-5deg) skew(30deg)',
        }}
      >
        {title}
      </Text>
    </Box>
  );
};

export const InfoBox = ({ children }: InfoBoxProps) => {
  const theme = useTheme();
  return (
    <>
      <Box styleSheet={{ marginBottom: '-1px', marginTop: '-3rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          width="100vw"
        >
          <path
            fill={theme.colors.primary.main}
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>

      <Box
        styleSheet={{
          backgroundColor: theme.colors.primary.main,
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
          {children}
        </Box>
      </Box>

      <Box styleSheet={{ transform: 'rotate(180deg)', marginTop: '-1px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100vw"
          viewBox="0 0 1440 180"
        >
          <path
            fill={theme.colors.primary.main}
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </>
  );
};
