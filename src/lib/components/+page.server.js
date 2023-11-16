import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {  
  let query = gql`
    query wishes {
      wishes {
        id
        heading
        description
        date
        label
        image {
          url
        }
      }
    }
  `;

  try {
    const request = await hygraph.request(query);
    return {
      data: request,  // Zorg ervoor dat je het resultaat op de juiste manier doorgeeft
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      status: 500,
      error: new Error('Error fetching data'), // Pas dit aan op basis van je behoeften
    };
  }
}