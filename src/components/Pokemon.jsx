import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon(url) {
  const { id } = useParams();
  const [data, setData] = useState();
  let PokemonId = "";
  let name = "";

  useEffect(() => {
    fetch(url["url"])
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [data]);

  let src = "";
  if (data != null) {
    src = data["sprites"]["other"]["official-artwork"]["front_default"];
    PokemonId = data["id"];
    name = data["name"];
  }

  return (
    <>
      <Box>
        <Typography>{name}</Typography>
        <img width="100" height="100" src={src}></img>
        <Button
          variant="contained"
          href={"/Pokedex/" + id + "/Recherche/Pokemon/" + PokemonId}
        >
          Voire le pokemon
        </Button>
      </Box>
    </>
  );
}

export default Pokemon;
