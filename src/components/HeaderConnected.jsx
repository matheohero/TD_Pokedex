import React from "react";
import { useParams } from "react-router-dom";
import { getUsersInLocalStorage } from "../services/User.jsx";
import { Avatar, Box, Button, Typography } from "@mui/material";

function HeaderConnected() {
  const users = getUsersInLocalStorage();
  const { id } = useParams();

  return (
    <>
      <Box>
        <Avatar
          sx={{ height: 50, width: 50 }}
          alt="profilePicture"
          src={"/" + users[id][1]}
        />
        <Typography>Bonjour {users[id][0]}</Typography>
        <Button variant="contained" href="/">
          Se déconnecter
        </Button>
      </Box>
    </>
  );
}

export default HeaderConnected;
