import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
    abilities {
      count
      next
      previous
      results {
        url
        name
      }
    }
  }
`;
