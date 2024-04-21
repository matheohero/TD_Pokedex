import React from "react";
import Page from "./Page";
import { Box, Typography, TextField } from "@mui/material";
import HeaderConnected from "./HeaderConnected";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function Recherche() {
  const [data, setData] = useState();
  const [recherche, setRecherche] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  let filteredData = [];
  let nbPokemon = 0;
  if (data != null) {
    if (recherche != null) {
      for (let index = 0; index < data["results"].length; index++) {
        const element = data["results"][index];
        if (element["name"].includes(recherche)) {
          nbPokemon++;
          filteredData.push(element);
        }
      }
    } else {
      filteredData = data["results"];
      nbPokemon = filteredData.length;
    }
  }

  return (
    <>
      <Page>
        <HeaderConnected />
        <Typography variant="h1">Chercher un pokemon</Typography>
        <TextField
          id="outlined-basic"
          label="Recherche ..."
          variant="outlined"
          onChange={(e) => {
            setRecherche(e.target.value);
          }}
          value={recherche}
        />
        <Typography>{nbPokemon} pokemons trouvés</Typography>
        <Box>
          {filteredData.map((elt) => (
            <Pokemon url={elt["url"]} />
          ))}
        </Box>
      </Page>
    </>
  );
}

export default Recherche;
