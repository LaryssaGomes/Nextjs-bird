import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = [{ params: { name: 'Asa-de-sabre-canela' } }];
  return {
    paths: paths,
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps', params);
  // Aqui você pode acessar params.name para obter o nome da rota
  const name = params.name;

  // Execute sua lógica de carregamento de dados com base em name

  return {
    props: {},
  };
}

export default function BirdInformationScreen() {
  const { query } = useRouter();

  // Renderize os dados aqui com base na query
  return <div>Informações sobre o pássaro: {query.name}</div>;
}
