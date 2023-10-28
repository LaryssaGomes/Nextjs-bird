import Box from '@src/components/Box/Box';
import { useTheme } from '@src/theme/ThemeProvider';
import Text from '@src/components/Text/Text';
import BoxSearch from '@src/components/BoxSearch/BoxSearch';
import Grid from '@src/components/Grid/Grid';

export const ContainerFotos = () => {
  const theme = useTheme();
  return (
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
  );
};
