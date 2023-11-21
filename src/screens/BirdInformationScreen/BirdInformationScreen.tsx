import Grid from '@src/components/Grid/Grid';
import Link from '@src/components/Link/Link';
import {
  InfoBox,
  ContainerTitle,
} from '@src/screens/BirdInformationScreen/patterns/InfoBox/InfoBox';
import { ContainerMain } from '@src/screens/BirdInformationScreen/patterns/ContainerMain/ContainerMain';
import { useRouter } from 'next/router';
import { getInformacoesAdcionaisAve } from 'services/searchNameAves';
import { Gallery } from './patterns/Gallery/Gallery';

type BirdInformationScreenProps = {
  name: string;
  referencias?: string[];
  aveId: string;
  introducao: string;
  dados: {
    titulo: string;
    dados: any[]; // Se você souber o tipo dos dados, substitua 'any' por esse tipo
  }[];
  img: {
    img: string;
    alt?: string;
  };
  imgsGallery: any[];
};

export async function getStaticPaths() {
  const paths = [
    { params: { name: 'Asa-de-sabre-canela' } },
    { params: { name: 'Formigueiro-de-cauda-castanha' } },
  ];
  return {
    paths: paths,
    fallback: 'blocking', // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  const data = await getInformacoesAdcionaisAve(params?.name);
  console.log(data);

  return {
    props: {
      ...data,
      name: params?.name,
      imgsGallery: [...data.imgs],
    },
  };
}

export default function BirdInformationScreen({
  name,
  referencias,
  aveId,
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
          <Link href={item} colorVariant="neutral">
            {item}
          </Link>
        ))}
      </InfoBox>
    </>
  );
}
