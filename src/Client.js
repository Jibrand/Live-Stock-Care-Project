import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'mza2e2t2',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: 'sku0jjUFytghq4MenBXACTHHcK8dcaQAJ97jPbBS8KBxe60kakZZALdBv7j4qUlVF6ZmeYQySBf7QT1M53YLFwxLGpzYik6dQjkYD2tGXRUHMAlWDarQftYohOzt52xShjcfbv7XqJuEg8t9cjj7MgA3MlJU4cabGDrujDyZkebSwkT42T4H',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);