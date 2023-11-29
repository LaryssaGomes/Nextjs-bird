import Box from '@src/components/Box/Box';
import { useTheme } from '@src/theme/ThemeProvider';
import Text from '@src/components/Text/Text';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Image from '@src/components/Image/Image';

interface ProductCardProps {
  introducao: string;
  img: {
    img: string;
    alt?: string;
  };
  nomeUnico: string;
}

export const ContainerFotos = () => {
  return (
    <Box>
      <Image src={''} alt={''} />
    </Box>
  );
};
