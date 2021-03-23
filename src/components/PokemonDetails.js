import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: "20%",
    marginLeft: "20%",
    marginTop: 36,
  },
  root: {
    maxWidth: 600,
    marginTop: 20,
  },
  button: {
    display: "flex",
    maxHeight: 40,
    maxWidth: 140,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.grey[100],
    borderColor: theme.palette.grey[100],
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  titleCard: {
    marginLeft: 8,
    marginTop: 0,
    marginBottom: "0.35em"
  }
}));

const PokemonDetails = () => {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((resultPokemon) => {
        setPokemon(resultPokemon);
        console.log(resultPokemon);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        component={Link}
        to={`/`}
        variant="outlined"
      >
        Go back to list!
      </Button>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image={pokemon.sprites.front_default}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <h3 className={classes.titleCard}>Abilities</h3>
          <div>
            {pokemon.abilities.map((item) => (
              <Button key={item.ability.name} size="small" color="primary">
                {item.ability.name}
              </Button>
            ))}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default PokemonDetails;
