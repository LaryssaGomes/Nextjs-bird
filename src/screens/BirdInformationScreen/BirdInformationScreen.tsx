import { ContainerData } from '@src/screens/BirdInformationScreen/patterns/ContainerData/ContainerData';
import { ContainerMain } from '@src/screens/BirdInformationScreen/patterns/ContainerMain/ContainerMain';
import { useRouter } from 'next/router';
import { getInformacoesAdcionaisAve } from 'services/searchNameAves';

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

  return {
    props: { ...data, name: params?.name },
  };
}

export default function BirdInformationScreen({
  name,
  referencias,
  aveId,
  dados,
  introducao,
  img,
}: BirdInformationScreenProps) {
  return (
    <>
      <ContainerMain img={img.img} nomeUnico={name} alt={img.alt} />
      <ContainerData
        datas={{
          blocoDeInformacoes: dados,
          dadosIniciais: introducao,
          referencia: referencias,
        }}
      />
    </>
  );
}
