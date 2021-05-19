import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#3f50b5",
    },
 }));

const Header = () => {
    const { header } = useStyles();
    const displayDesktop = () => {
        return <Toolbar>
          <IconButton>
            <WhatshotTwoToneIcon />
          </IconButton>
          {soakedLogo}
        </Toolbar>;
      };
    
      const soakedLogo = (
        <Typography variant="h6">
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