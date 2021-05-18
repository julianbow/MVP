import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#3f50b5",
    },
 }));

const Header = () => {
    const { header, logo } = useStyles();
    const displayDesktop = () => {
        return <Toolbar>{femmecubatorLogo}</Toolbar>;
      };
    
      const femmecubatorLogo = (
        <Typography variant="h6" component="h1">
          Soaked
        </Typography>
      );
    
      return (
        <header>
          <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
      );
}

export default Header;