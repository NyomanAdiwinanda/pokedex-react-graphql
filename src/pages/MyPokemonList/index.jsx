import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "../../components/Card";

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const MyPokemonList = () => {
  const [render, setRender] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(JSON.parse(localStorage.myPokemon));
  }, [render]);

  const removePokemon = (nickname) => {
    let data = JSON.parse(localStorage.myPokemon);
    let filtered = data.filter((el) => {
      return el.nickname !== nickname;
    });

    localStorage.myPokemon = JSON.stringify(filtered);

    setRender(!render);
  };

  if (pokemon.length === 0) return <h3>You don't have any pokemons</h3>;

  return (
    <DIV>
      {pokemon.map((el, i) => {
        return <Card name={el.name} image={el.image} nickname={el.nickname} key={i} removePokemon={removePokemon} />;
      })}
    </DIV>
  );
};

export default MyPokemonList;
