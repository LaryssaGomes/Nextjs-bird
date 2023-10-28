import { DocumentData, Query, collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "./firebase";

const normalizarSearch = (search: string) =>
{
    search = search.toLowerCase();
    search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const palavras = search.split(' ');

    return palavras;
}

export const getNameAves = async (name?: string) =>
{
    const birdsRef = collection(db, 'ave');
    let queryRef = query(birdsRef, limit(40));;
    if (name)
    {
        queryRef = query(
            birdsRef,
            where('nomeDeBusca', 'array-contains-any', normalizarSearch(name)),
        );
    }

    try
    {
        const querySnapshot = await getDocs(queryRef);
        const documentos = [];

        querySnapshot.forEach((birdDocument) =>
        {
            documentos.push({ ...birdDocument.data() });
        });

        return documentos;
    } catch (error)
    {
        throw new Error('Erro ao buscar documentos: ' + error);
    }
}

const getIdAve = async (name: string) =>
{
    console.log("const getIdAve = async (name: string) =>");
    const birdsRef = collection(db, 'ave');
    let queryRef = query(
        birdsRef,
        where('nomeUnico', '==', name),
    );

    try
    {
        const querySnapshot = await getDocs(queryRef);
        let aveId;

        querySnapshot.forEach((birdDocument) =>
        {
            aveId = birdDocument.id;
        });
        return aveId;

    } catch (error)
    {
        throw new Error('Erro ao buscar documentos: ' + error);
    }
}
export const getInformacoesAdcionaisAve = async (name: string) =>
{
    console.log({ name })
    const aveId = await getIdAve(name);
    console.log({ aveId });
    const additionalInformationsRef = collection(db, 'informacoesAdicionais');
    let queryRef = query(
        additionalInformationsRef,
        where('aveId', '==', aveId),
    );

    try
    {
        const querySnapshot = await getDocs(queryRef);
        let document;

        querySnapshot.forEach((birdDocument) =>
        {
            document = birdDocument.data();
        });
        return document;

    } catch (error)
    {
        throw new Error('Erro ao buscar documentos: ' + error);
    }
}