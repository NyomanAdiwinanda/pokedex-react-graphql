import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import Swal from "sweetalert2";

import { GET_DETAIL } from "../../graphql/queries/pokemon";

import Loading from "../../components/Loading";

import "./style.css";

const PokemonDetail = () => {
  let params = useParams();
  const location = useLocation();

  const [getDetail, { loading, data, error }] = useLazyQuery(GET_DETAIL, {
    variables: {
      name: params.name,
    },
  });

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  if (error) return <h1>error</h1>;
  if (loading || !data) return <Loading />;

  const moves = data.pokemon.moves;
  const types = data.pokemon.types;

  const catchPokemon = () => {
    let timerInterval;
    Swal.fire({
      title: "Catching pokemon",
      html: "Waiting the result in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
      const catched = Math.round(Math.random());

      if (catched) {
        Swal.fire({
          title: "You catch the pokemon! Give it a nickname.",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: false,
          confirmButtonText: "Enter",
          showLoaderOnConfirm: true,
          preConfirm: (val) => {
            let newList;
            if (localStorage.myPokemon) {
              newList = [
                ...JSON.parse(localStorage.myPokemon),
                {
                  name: params.name,
                  image: location.state.image,
                  nickname: val,
                },
              ];
            } else {
              newList = [
                {
                  name: params.name,
                  image: location.state.image,
                  nickname: val,
                },
              ];
            }
            localStorage.myPokemon = JSON.stringify(newList);

            return true;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result) {
            Swal.fire({
              title: "Go to 'My Pokemon' to see your pokemon",
            });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You failed to catch the pokemon, try again",
        });
      }
    });
  };

  return (
    <div className="pokemondetail-container">
      <img src={location.state.image} width={130} height={150} alt={params.name} />
      <p className="pokemondetail-title">{params.name}</p>
      <button className="button-catch" onClick={catchPokemon}>
        catch
      </button>
      <p className="pokemondetail-title">Types:</p>
      <div className="pokemondetail-list">
        {types.map((el, i) => {
          return <div>{i === types.length - 1 ? el.type.name : `${el.type.name}, `}</div>;
        })}
      </div>
      <p className="pokemondetail-title">Moves:</p>
      <div className="pokemondetail-list">
        {moves.map((el, i) => {
          return <div className="pokemondetail-box">{el.move.name}</div>;
        })}
      </div>
    </div>
  );
};

export default PokemonDetail;
