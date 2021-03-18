import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import PokemonsList from "./components/PokemonsList";
import ContainerMain from "./components/ContainerMain";

const styles = makeStyles((theme) => ({
  bodyContainer: {
    paddingTop: 20,
    [theme.breakpoints.up("sm")]: {
      marginRight: "10%",
      marginLeft: "10%",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "20%",
      marginLeft: "20%",
    },
  },
}));

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

  const classes = styles();

  return (
    <ThemeProvider theme={theme}>
      <ContainerMain>
        <Header />
        <div className={classes.bodyContainer}>
          <PokemonsList />
        </div>
      </ContainerMain>
    </ThemeProvider>
  );
};

export default App;
