import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import PokemonsList from "./components/PokemonsList";
import ContainerMain from "./components/ContainerMain";
import PokemonDetails from "./components/PokemonDetails"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";


const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#161B22",
        dark: "#0D1117",
      },
      success: {
        main: "#5CB051",
      },
      background: {
        default: "#090C10",
      },
      divider: "#104d7c",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContainerMain>
        <Router>
          <Header />
          <Switch>
            <Route path="/pokemons/list" component={PokemonsList} />
            <Route path="/pokemon/:name" component={PokemonDetails} />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
      </ContainerMain>
    </ThemeProvider>
  );
};

export default App;
