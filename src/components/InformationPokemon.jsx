import React from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderConnected from "./HeaderConnected";
import {
  getUsersInLocalStorage,
  setUsersInLocalStorage,
} from "../services/User.jsx";

function InformationPokemon() {
  const { pokemonId } = useParams();
  const { id } = useParams();
  const [data, setData] = useState();
  const [users, setUsers] = useState();
  let user = getUsersInLocalStorage()[id];
  let listPokemon = user[2];

  let isPresent = false;
  for (let index = 0; index < listPokemon.length; index++) {
    if (listPokemon[index] == pokemonId) {
      isPresent = true;
      index = listPokemon.length + 1; // sorite de la boucle
    }
  }

  const handleAddPokedex = () => {
    listPokemon.push(pokemonId);
    users[id] = user;
    setUsersInLocalStorage(users);
    setUsers([...users]);
  };

  const handleRemovePokedex = () => {
    listPokemon = listPokemon.filter((i) => i !== pokemonId);
    user[2] = listPokemon;
    users[id] = user;
    setUsersInLocalStorage(users);
    setUsers([...users]);
  };

  useEffect(() => {
    setUsers(getUsersInLocalStorage());
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  if (data != null) {
    return (
      <>
        <Page>
          <HeaderConnected />
          <Typography variant="h1">{data["name"]}</Typography>
          <Box>
            {data["types"].map((value) => (
              <Typography>{value["type"]["name"]}</Typography>
            ))}
          </Box>
          <img
            height="300"
            width="300"
            src={data["sprites"]["other"]["official-artwork"]["front_default"]}
          ></img>
          <Typography variant="h2">Statistiques</Typography>

          <Box>
            {data["stats"].map((value, index) => (
              <Typography>
                {data["stats"][index]["stat"]["name"]}{" "}
                {data["stats"][index]["base_stat"]}
              </Typography>
            ))}
          </Box>
          <Box>
            {isPresent == false && (
              <Button variant="contained" onClick={handleAddPokedex}>
                Ajouter dans le pokedex
              </Button>
            )}
            {isPresent == true && (
              <Button variant="contained" onClick={handleRemovePokedex}>
                Supprimer du pokedex
              </Button>
            )}
          </Box>
          <Box>
            <Button variant="outlined" href={"/Pokedex/" + id}>
              Retour au pokedex
            </Button>
          </Box>
        </Page>
      </>
    );
  }
}

export default InformationPokemon;
