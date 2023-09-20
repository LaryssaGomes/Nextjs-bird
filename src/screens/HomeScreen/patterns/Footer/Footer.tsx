import Box from '@src/components/Box/Box';
import Button from '@src/components/Button/Button';
import Icon from '@src/components/Icon/Icon';
import Link from '@src/components/Link/Link';
import Text from '@src/components/Text/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

export const Footer = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const swingAnimation = useSpring({
    to: async (next, cancel) => {
      while (true) {
        await next({ transform: 'rotate(0deg)' });
        await next({ transform: 'rotate(10deg)' });
        await next({ transform: 'rotate(-10deg)' });
        await next({ transform: 'rotate(0deg)' });
        await cancel();
      }
    },
    config: { duration: 500 },
  });

  const AnimatedLink = styled(animated.a)`
    cursor: pointer;
    display: inline-block;
  `;

  return (
    <>
      <Box
        tag="footer"
        styleSheet={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddin: '1rem 2rem',
          flexWrap: 'wrap',
          alignContent: 'center',
        }}
      >
        <Box
          styleSheet={{
            maxWidth: '345px',
            margin: '2rem',
          }}
        >
          <Text
            variant="title2"
            styleSheet={{
              marginBottom: '1rem',
            }}
          >
            Logo
          </Text>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </Box>

        <Box
          styleSheet={{
            margin: '2rem',
            minWidth: '200px',
          }}
        >
          <Text variant="title2" styleSheet={{ marginBottom: '1rem' }}>
            Contato
          </Text>
          <Text>(82) 99657-6157</Text>
          <Text>laryssag533@gmail.com</Text>
        </Box>

        <Box
          styleSheet={{
            margin: '2rem',
          }}
        >
          <Text variant="title2" styleSheet={{ marginBottom: '1rem' }}>
            Nosso site
          </Text>
          <Text>Home</Text>
          <Text>Contato</Text>
          <Text>Galeria</Text>
        </Box>

        <Box
          styleSheet={{
            flexDirection: 'row',
            flexBasis: 1,
            margin: '2rem',
          }}
        >
          <AnimatedLink
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={isHovered ? swingAnimation : null}
            href="#"
          >
            <Icon name="instagram" size="xl" />
          </AnimatedLink>
        </Box>

        <Box
          styleSheet={{
            borderTop: `2px solid ${theme.colors.primary.main}`,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Text
            variant="body2"
            styleSheet={{
              padding: '1rem',
            }}
          >
            Feito com ❤️ por Laryssa Gomes
          </Text>
        </Box>
      </Box>
    </>
  );
};
