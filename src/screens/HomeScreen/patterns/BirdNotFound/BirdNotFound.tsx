import React from 'react';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';

export const BirdNotFound = () => {
  return (
    <Box
      styleSheet={{
        alignItems: 'center',
        maxWidth: { xs: '100px', md: '350px', lg: '500px' },
      }}
    >
      <Image
        styleSheet={{
          maxWidth: '200px',
        }}
        src="/images/ave-espian.png"
        alt="desenho de ave com lupa"
      />
      <Text
        styleSheet={{
          textAlign: 'justify',
        }}
      >
        "Ops! Parece que a ave que você está procurando está em uma missão
        ultra-secreta de migração. 🕊️🕵️‍♀️ Ela pode estar em qualquer lugar do
        mundo agora! Que tal tentar novamente com outro nome de ave? 🌎✈️"
      </Text>
    </Box>
  );
};
