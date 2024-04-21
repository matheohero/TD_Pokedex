import React from "react";
import Page from "./Page";
import {
  Button,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  getUsersInLocalStorage,
  setUsersInLocalStorage,
} from "../services/User.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Connexion() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = (index) => {
    const user = users.filter((users, i) => i !== index);
    setUsers(user);
  };

  const handleClick = (index) => {
    navigate("/Pokedex/" + index);
  };

  return (
    <Page>
      <Box sx={{ marginBottom: 1, marginX: 15 }}>
        <Typography variant="h1">Connexion au Pokedex</Typography>
      </Box>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((users, index) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{ height: 50, width: 50 }}
                alt="profilePicture"
                src={users[1]}
                onClick={() => {
                  handleClick(index);
                }}
              />
            </ListItemAvatar>
            <ListItemText primary={users[0]} />
            <Button
              sx={{ color: "black", marginX: 40 }}
              onClick={() => {
                handleDelete(index);
              }}
            >
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginBottom: 1, marginX: 20 }}>
        <Button href="CreationCompte" variant="contained">
          Créer un utilisateur
        </Button>
      </Box>
    </Page>
  );
}

export default Connexion;
