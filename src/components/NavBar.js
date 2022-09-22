import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar, // min-height: 56px;
    marginBottom: "1rem", // margen opcional
  },
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">bluuweb</Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
        
        
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </React.Fragment>
  );
};

export default Navbar;