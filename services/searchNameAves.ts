import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "./firebase";

const normalizarSearch = (search: string) =>
{
    search = search.toLowerCase();
    search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const palavras = search.split(' ');

    return palavras;
}

export const getNameAves = async (name: string) =>
{
    const birdsRef = collection(db, 'ave');

    const queryRef = query(
        birdsRef,
        where('nomeDeBusca', 'array-contains-any', normalizarSearch(name)),
    );

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