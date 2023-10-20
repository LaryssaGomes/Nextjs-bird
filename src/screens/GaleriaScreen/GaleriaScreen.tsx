import { ContainerFotos } from './patterns/ContainerFotos/ContainerFotos';
import { ContainerGaleria } from './patterns/ContainerGaleria/ContainerGaleria';

export default function GaleriaScreen() {
  return (
    <>
      <ContainerGaleria />
      <ContainerFotos />
    </>
  );
}
