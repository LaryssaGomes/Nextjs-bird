import { buildClient } from "@datocms/cma-client-node";

export const api = buildClient({
    apiToken: process.env.apiToken,
});
