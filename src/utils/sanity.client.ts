// Import Third-Party Modules
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

/**
 * Defining our backend sanity server configuration
 */
export const sanityClientInstance = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  apiVersion: '2023-05-02',
  dataset: 'production',
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true,
});

/**
 * Image URL Builder for our sanity schema
 */
const builder = imageUrlBuilder(sanityClientInstance);

/**
 * Utility function to convert our sanity image source to valid image
 * src.
 * @param imageSource image URL from sanity backend
 * @returns Image Src string value
 */
export const URLFor = (imageSource: SanityImageSource | string) => {
  return builder.image(imageSource);
};
