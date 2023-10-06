import Box from '@src/components/Box/Box';
import Image from '@src/components/Image/Image';
import { useTheme } from '@src/theme/ThemeProvider';
import { ReactNode } from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { Item } from '../Item/Item';

export const BackgroundList = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        styleSheet={{
          width: '100vw',
          transform: 'translateX(-3rem)',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#AAD1BA"
            fill-opacity="1"
            d="M0,224L26.7,186.7C53.3,149,107,75,160,42.7C213.3,11,267,21,320,58.7C373.3,96,427,160,480,170.7C533.3,181,587,139,640,106.7C693.3,75,747,53,800,69.3C853.3,85,907,139,960,138.7C1013.3,139,1067,85,1120,85.3C1173.3,85,1227,139,1280,160C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
        <Item />
        <Item />
      </Box>
    </>
  );
};
