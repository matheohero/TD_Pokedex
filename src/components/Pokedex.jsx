import React from "react";
import Page from "./Page";
import { useParams, useLocation } from "react-router-dom";
import { getUsersInLocalStorage } from "../services/User.jsx";
import {
  Box,
  Button,
  Typography,
  Card,
} from "@mui/material";
import HeaderConnected from "./HeaderConnected.jsx";
import Pokemon from "./Pokemon";

function Pokedex() {
  const location = useLocation();
  const { id } = useParams();
  const user = getUsersInLocalStorage()[id];
  const listPokemon = user[2];

  return (
    <>
      <Page>
        <HeaderConnected />
        <Typography variant="h1">Pokedex</Typography>
        <Box>
          {listPokemon.map((index) => (
            <Card variant="outlined">
              <Pokemon url={"https://pokeapi.co/api/v2/pokemon/" + index} />
            </Card>
          ))}
        </Box>
        <Button variant="contained" href={location.pathname + "/Recherche"}>
          Chercher un pokemon
        </Button>
      </Page>
    </>
  );
}

export default Pokedex;
