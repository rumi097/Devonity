/// <reference types="vite/client" />
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to false for fresh data
  apiVersion: '2024-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
