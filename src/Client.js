import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'n8dkd9q1',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: 'sku887LF1wDpIHPGmZH5ZT8W9xWjLAZ5OKEv9EM3eyOAUgI4ShX8yuscsiIX9JrHRcUCEJCNvHBvSANFJsjDvz3TBEm61l8iEO9rtgQEbOEPftWa4OxzmQunTCWGhgAOCudIZWwNh9XjBVKMVVL2VZ94oP7XeHmdNtwnamrNeEJFzn4n9lyc',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);