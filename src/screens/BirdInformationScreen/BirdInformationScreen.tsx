import Link from '@src/components/Link/Link';
import {
  InfoBox,
  ContainerTitle,
} from '@src/screens/BirdInformationScreen/patterns/InfoBox/InfoBox';
import { ContainerMain } from '@src/screens/BirdInformationScreen/patterns/ContainerMain/ContainerMain';
import { getInformacoesAdcionaisAve } from 'services/datoCMS';
import { Gallery } from './patterns/Gallery/Gallery';
import { MdInsertLink } from 'react-icons/md';
import Box from '@src/components/Box/Box';

type BirdInformationScreenProps = {
  name: string;
  referencias?: any[];
  introducao: string;
  dados: {
    titulo: string;
    dados: any[]; // Se você souber o tipo dos dados, substitua 'any' por esse tipo
  }[];
  img: {
    img: string;
    alt?: string;
  };
  imgsGallery?: any[];
};

export async function getStaticPaths() {
  const paths = [{ params: { name: 'Bico-de-lacre' } }];
  return {
    paths: paths,
    fallback: 'blocking', // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  const data = await getInformacoesAdcionaisAve(params?.name);
  const firstDataItem = Array.isArray(data) ? data[0] : data;

  return {
    props: {
      ...firstDataItem,
      name: params?.name,
      imgsGallery: [...firstDataItem?.imgs],
      referencias: [
        { link: firstDataItem?.referencias[0], name: 'Wikipidia' },
        { link: firstDataItem?.referencias[1], name: 'Wikiaves' },
      ],
    },
  };
}

export default function BirdInformationScreen({
  name,
  referencias,
  dados,
  introducao,
  img,
  imgsGallery,
}: BirdInformationScreenProps) {
  return (
    <>
      <ContainerMain img={img.img} nomeUnico={name} alt={img.alt} />
      <InfoBox>
        <ContainerTitle title="Introdução" />
        {introducao}
        {dados.map((item) => (
          <>
            <ContainerTitle title={item.titulo} />
            {item.dados}
          </>
        ))}
        <Gallery imgsGallery={imgsGallery} />
        <ContainerTitle title="Referência" />
        {referencias.map((item) => (
          <Link href={item.link} colorVariant="neutral">
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                cursor: 'pointer',
              }}
            >
              <MdInsertLink size={16} />
              {item.name}
            </Box>
          </Link>
        ))}
      </InfoBox>
    </>
  );
}
