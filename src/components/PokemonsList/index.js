import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.palette.grey[50],
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItemContainer: {
    marginBottom: 5,
  },
  listItem: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 5,
  },
  avatar: {
    background: theme.palette.grey[50],
    color: theme.palette.grey[900],
  },
  alerta: {
    display: "flex",
    maxHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.success.main,
  },
}));

const PokemonsList = () => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((r) => r.json())
      .then((json) => {
        setPokemons(json.results);
      });
  }, []);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {pokemons &&
        pokemons.map(({ name }) => (
          <div key={name} className={classes.listItemContainer}>
            <ListItem button color="primary" className={classes.listItem}>
              <ListItemIcon>
                <Avatar className={classes.avatar}>W</Avatar>
              </ListItemIcon>
              <ListItemText primary={name} />
              <Alert
                className={classes.alerta}
                variant="outlined"
                severity="success"
              >
                New!
              </Alert>
            </ListItem>
          </div>
        ))}
    </List>
  );
};

export default PokemonsList;