import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'amq0ogut',
    dataset: 'production',
    apiVersion: '2022-09-10',
    useCdn: true,
    token: process.env.NEXT_SANITY_API_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);