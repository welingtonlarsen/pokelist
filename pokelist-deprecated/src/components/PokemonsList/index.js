import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    paddingTop: 20,
    paddingBottom: 40,
    [theme.breakpoints.up("sm")]: {
      marginRight: "10%",
      marginLeft: "10%",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "20%",
      marginLeft: "20%",
    },
  },
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.palette.grey[50],
  },
  input: {
    marginBottom: 20,
    backgroundColor: theme.palette.grey[50],
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: 5,
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
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
  alert: {
    display: "flex",
    maxHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.success.main,
  },
}));

const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const PokemonsList = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [pokemonsNames, setPokemonsNames] = useState(null);

  const filteredPokemons =
    pokemonsNames &&
    pokemonsNames.filter((name) => name.includes(search.toLowerCase()));

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((json) => {
        setPokemonsNames(json.results.map(({ name }) => name));
        console.log("carreguei a pagina");
      });
  }, []);

  return (
    <div className={classes.bodyContainer}>
      <TextField
        onChange={(event) => setSearch(event.target.value)}
        focused={true}
        size="small"
        id="outlined-full-width"
        placeholder="Filter by name"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        className={classes.input}
      />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {pokemonsNames &&
          filteredPokemons.map((name) => (
            <div key={name} className={classes.listItemContainer}>
              <ListItem
                component={Link}
                to={`/pokemon/${name}`}
                button
                color="primary"
                className={classes.listItem}
                onClick={() => console.log("clicou")}
              >
                <ListItemIcon>
                  <Avatar className={classes.avatar}>W</Avatar>
                </ListItemIcon>
                <ListItemText primary={capitalizeFirstLetter(name)} />
                <Alert
                  className={classes.alert}
                  variant="outlined"
                  severity="success"
                >
                  New!
                </Alert>
              </ListItem>
            </div>
          ))}
      </List>
    </div>
  );
};

export default PokemonsList;
