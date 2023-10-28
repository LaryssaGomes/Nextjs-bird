import React, { ReactNode } from 'react';
import Box from '@src/components/Box/Box';
import Text from '@src/components/Text/Text';
import Image from '@src/components/Image/Image';

interface BirdNotFoundProps {
  children: ReactNode;
}
export const BirdNotFound = ({ children }: BirdNotFoundProps) => {
  return (
    <Box
      styleSheet={{
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: { xs: '200px', md: '200px', lg: '500px' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Image
        styleSheet={{
          maxWidth: { xs: '150px', md: '200px', lg: '250px' },
        }}
        src="/images/bird-detetive.svg"
        alt="desenho de ave com lupa"
      />
      <Text
        styleSheet={{
          textAlign: 'center',
          wordBreak: 'break-all',
          whiteSpace: 'break-spaces',
          width: '100%',
        }}
      >
        {children}
      </Text>
    </Box>
  );
};
