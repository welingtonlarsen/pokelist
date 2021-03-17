import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/pokemon-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
  },
  title: {
    flexGrow: 1,
  },
  customizeToolbar: {
    minHeight: 70,
  },
  logoTitle: {
    position: "absolute",
    left: "50%",
    transform: `translateX(-50%)`,
    height: 100,
    width: 177,
  },
  logoutButton: {
    position: "absolute",
    right: 0,
    marginRight: "1rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.customizeToolbar}>
          <img src={Logo} className={classes.logoTitle} alt="asdasd" />
          <Button color="inherit" className={classes.logoutButton}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
