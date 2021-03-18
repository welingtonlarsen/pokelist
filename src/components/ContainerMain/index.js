import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  }
}));

const ContainerMain = ( {children} ) => {
    const classes = styles()

    return (
        <div className={classes.container}>
            {children}
        </div>
    )
};

export default ContainerMain;
