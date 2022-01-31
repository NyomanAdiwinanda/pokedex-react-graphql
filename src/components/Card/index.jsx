import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Card = styled.div`
  width: 120px;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
`;

const A = styled.a`
  font-family: "Courier New", Courier, monospace;
  font-size: 15px;
  text-decoration: none;
`;

const Index = ({ name, image, nickname, removePokemon }) => {
  const navigate = useNavigate();

  const numOwned = JSON.parse(localStorage.myPokemon).filter((el) => el.name === name).length;

  return (
    <Card>
      <A
        href=""
        onClick={() =>
          navigate(`/detail/${name}`, {
            state: {
              image,
            },
          })
        }
      >
        <img src={image} width={100} height={120} alt={name} />
        <p>{name}</p>
        {!nickname && <p>owned: {numOwned}</p>}
      </A>
      {nickname && (
        <>
          <p>{nickname}</p>
          <button onClick={() => removePokemon(nickname)}>remove</button>
        </>
      )}
    </Card>
  );
};

export default Index;
