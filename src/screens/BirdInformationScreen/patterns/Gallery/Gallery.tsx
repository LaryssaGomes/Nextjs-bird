import Grid from '@src/components/Grid/Grid';
import { ContainerTitle } from '../InfoBox/InfoBox';

interface GalleryProps {
  imgsGallery: any[];
}

export const Gallery = ({ imgsGallery }: GalleryProps) => {
  return (
    <>
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
    </>
  );
};
