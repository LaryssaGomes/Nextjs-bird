export const requestPost = async (query) =>
{

    try
    {
        const pageContentResponse = await fetch("https://graphql.datocms.com/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer  a27842e34b97964389a439e32b0cb9",
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

export const getNameAves = async (name?: string) =>
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

    return responde.data.allBirds;
}

export const getInformacoesAdcionaisAve = async (name: string) =>
{
    try
    {

        const queryBird = `
        query {
            allBirds(
            filter: {
                nomeunico: {
                matches: { pattern: "${name}" }
                }
            }
            ) {
            id,
            nomeunico,
            introducao,
            img
            }
        }
        `;

        const contentResponseBird = await requestPost(queryBird);

        const idBird = contentResponseBird.data.allBirds[0].id;

        const queryArticle = `query{
            allArticles(
                filter: {
                fkBird: {
                    eq: ${idBird}
                }
                }
            ) {
                id
                dados,
                referencias
            }
        }`;

        const contentResponseArticle = await requestPost(queryArticle);
        return {
            ...contentResponseArticle.data.allArticles[0],
            ...contentResponseBird.data.allBirds[0]
        };



    } catch (error)
    {
        throw new Error('Erro ao buscar documentos: ' + error);
    }
}