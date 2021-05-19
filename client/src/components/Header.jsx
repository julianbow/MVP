import React from "react";
import UserModal from './Modal.jsx';
import { AppBar, Toolbar, Typography, IconButton, Button, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    header: {
       backgroundColor: "#3f50b5",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
 }));

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    const displayDesktop = () => {
        return <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <WhatshotTwoToneIcon />
          </IconButton>
          {soakedLogo}
          <IconButton color="inherit" onClick={handleClickOpen}>
            <AccountCircle />
            {open ? <UserModal isOpen={open} handleClose={handleClose}/> : null}
          </IconButton>
        </Toolbar>;
      };
    
      const soakedLogo = (
        <Typography variant="h6" className={classes.title}>
          Soaked
        </Typography>
      );
    
      return (
        <header>
          <AppBar className={classes.header}>{displayDesktop()}</AppBar>
        </header>
      );
}

export default Header;