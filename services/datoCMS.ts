export const requestPost = async (query) =>
{

    try
    {
        const pageContentResponse = await fetch("https://graphql.datocms.com/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${process.env.apiToken}`,
            },
            body: JSON.stringify({
                query,
            }),
        }).then(async (respostaDoServer) =>
        {
            const body = await respostaDoServer.json();
            if (!body.errors) return body;

            throw new Error(JSON.stringify(body));
        });

        return pageContentResponse;
    } catch (err)
    {
        throw new Error(err.message);
    }
}

interface BirdInfo
{
    id: string;
    nomeunico: string;
    introducao: string;
    img: {
        img: string;
        alt: string;
    };
}
export const getNameAves = async (name?: string): Promise<BirdInfo[]> =>
{

    const query = name ? `query{
        allBirds(
            filter: {
            nomeunico: {
                matches: { pattern: ${name}, caseSensitive: false }
            }
        }
        ) {
            id,
            nomeunico,
            introducao,
            img
        }
    }`: `query{
        allBirds
         {
            id,
            nomeunico,
            introducao,
            img
        }
    }`;
    const responde = await requestPost(query);

    return responde.data.allBirds as BirdInfo[];
}
type BirdInfoAdd = {
    id: string;
    dados: { titulo: string; dados: any[] }[];
    referencias: any[];
    nomeunico: string;
    introducao: string;
    img: { img: string; alt: string };
    imgs?: {
        authorName: string;
        authorLink: string;
        altText: string;
        imageUrl: string;
    }[];
};

export const getInformacoesAdcionaisAve = async (name: string): Promise<BirdInfoAdd[]> =>
{

    const queryBird = `query {
            allBirds(
                filter: {
                    nomeunico: {
                        matches: { pattern: "${name}", caseSensitive: false }
                    }
                }
            ) {
                id,
                nomeunico,
                introducao,
                img
            }
        }`;

    const contentResponseBird = await requestPost(queryBird);


    const idBird = contentResponseBird.data.allBirds[0].id;

    const queryArticle = `query {
        allArticles(
            filter: {
                fkBird: {
                    eq: "${idBird}"
                }
            }
        ) {
            id
            dados,
            referencias
        }
    }`;

    const contentResponseArticle = await requestPost(queryArticle);

    const queryGallerie = `query{
        allGalleries(
            filter: {
            fkBird: {
                 eq: "${idBird}"
                }
            }
        ){
            id,
            imgs
        }
   }`;
    const contentResponseGallerie = await requestPost(queryGallerie);


    return {
        ...contentResponseArticle.data.allArticles[0],
        ...contentResponseBird.data.allBirds[0],
        ...contentResponseGallerie.data.allGalleries[0],
    } as BirdInfoAdd[];

}

type BirdImage = {
    id: string;
    imgs: BirdImageDetail[];
};

type BirdImageDetail = {
    authorName: string;
    authorLink: string;
    altText: string;
    imageUrl: string;
};

export const getNameGaleria = async (name?: string): Promise<BirdImage[]> =>
{

    let birds;
    if (name)
    {
        const queryBird = `query {
            allBirds(
                filter: {
                    nomeunico: {
                        matches: { pattern: "${name}", caseSensitive: false }
                    }
                }
            ) {
                id,
                nomeunico,
                img
            }
        }`;

        const contentResponseBird = await requestPost(queryBird);

        birds = contentResponseBird.data.allBirds;

        const queryList = birds.map(item =>
            `query{
                allGalleries(
                    filter: {
                    fkBird: {
                        eq: "${item.id}"
                        }
                    }
                ){
                    id,
                    imgs
                }
            }`
        );
        let dados: BirdImage[] = [];
        await Promise.all(queryList.map(async (query) =>
        {
            const resultado = await requestPost(query);
            dados.push(resultado.data.allGalleries[0]);
        }));

        const error = dados.length === 0;

        return dados;

    }

    const queryGallerie = `query{
        allGalleries{
            id,
            imgs
        }
   }`;

    const contentResponseGallerie = await requestPost(queryGallerie);

    const data = contentResponseGallerie.data.allGalleries as BirdImage[];
    const error = data.length === 0;

    return data;
}