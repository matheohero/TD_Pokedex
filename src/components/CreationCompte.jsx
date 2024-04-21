import React from "react";
import Page from "./Page";
import { Button, Typography, Box, TextField, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getUsersInLocalStorage,
  setUsersInLocalStorage,
} from "../services/User.jsx";

function CreationCompte() {
  const [users, setUsers] = useState([]);
  const [img, setImg] = useState("");
  const [newUser, setNewUser] = useState("");

  const handleAddUser = () => {
    setUsers([...users, [newUser, img, []]]);
  };

  useEffect(() => {
    if (users.length > 0) {
      setUsersInLocalStorage(users);
    }
  }, [users]);

  useEffect(() => {
    const users = getUsersInLocalStorage();
    if (users) {
      setUsers(users);
    }
  }, []);

  return (
    <>
      <Page>
        <Box>
          <Typography variant="h1">Créer un utilisateur</Typography>
        </Box>
        <Box>
          <Typography>Choisir un avatar</Typography>
        </Box>

        <Avatar
          sx={{ height: 50, width: 50 }}
          alt="profilePicture"
          src="src\assets\3.jpg"
          onClick={() => {
            setImg("src/assets/3.jpg");
          }}
        />
        <Avatar
          sx={{ height: 50, width: 50 }}
          name="test"
          value="fdg"
          alt="profilePicture"
          src="src\assets\2.jpg"
          onClick={() => {
            setImg("src/assets/2.jpg");
          }}
        />
        <Avatar
          sx={{ height: 50, width: 50 }}
          alt="profilePicture"
          src="src\assets\1.jpg"
          onClick={() => {
            setImg("src/assets/1.jpg");
          }}
        />
        <Box>
          <TextField
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            onChange={(e) => {
              setNewUser(e.target.value);
            }}
            value={newUser}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={handleAddUser} href="/">
            Créer un compte
          </Button>
        </Box>
      </Page>
    </>
  );
}

export default CreationCompte;
