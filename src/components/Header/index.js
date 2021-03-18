import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/pokemon-logo.png";

const useStyles = makeStyles((theme) => ({
  logoTitle: {
    height: 70,
    width: 123.9  ,
  },
  grow: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={Logo} className={classes.logoTitle} alt="asdasd" />
        <div className={classes.grow}/>
        <Button color="inherit" >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
