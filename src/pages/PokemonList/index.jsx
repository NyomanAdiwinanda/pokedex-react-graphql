import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import styled from "@emotion/styled";

import { GET_POKEMON } from "../../graphql/queries/pokemons";

import Loading from "../../components/Loading";
import Card from "../../components/Card";

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const PokemonList = () => {
  const [getPokemon, { loading, data, error }] = useLazyQuery(GET_POKEMON, {
    variables: {
      limit: 1118,
      offset: 0,
    },
  });

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  if (loading || !data) return <Loading />;
  if (error) return <h1>error</h1>;

  const pokemon = data.pokemons.results;

  return (
    <DIV>
      {pokemon.map((el, i) => {
        return <Card name={el.name} image={el.image} key={i} />;
      })}
    </DIV>
  );
};

export default PokemonList;
