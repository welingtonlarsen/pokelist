import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Header from './components/Header'
import PokemonsList from './components/PokemonsList'

const styles = makeStyles((theme) => ({
  bodyContainer: {
    marginTop: 90,
    marginRight: '25%',
    marginLeft: '25%',
  }
}))

const App = () => {
  const classes = styles()

  return (
    <div>
      <Header />
      <div className={classes.bodyContainer}>
        <PokemonsList />
      </div>
    </div>
  );
}

export default App;
