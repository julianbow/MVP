import React, { useState } from "react";
import UserModal from './Modal.jsx';
import FavoriteModal from './Favorites.jsx';
import { AppBar, Toolbar, Typography, IconButton, Button, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import StarIcon from '@material-ui/icons/Star';

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

const Header = ({ favorites }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false); 
  const classes = useStyles();

    const handleModalOpen = () => {
      setModalOpen(true);
    };
    const handleModalClose = () => {
      setModalOpen(false);
    };

    const handleFavoritesOpen = () => {
      setFavoritesOpen(true);
    };
    const handleFavoritesClose = () => {
      setFavoritesOpen(false);
    };
  
    const displayDesktop = () => {
        return <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <WhatshotTwoToneIcon />
          </IconButton>
          {soakedLogo}
          <IconButton color="inherit" onClick={handleFavoritesOpen}>
            <StarIcon />
            {favoritesOpen ? <FavoriteModal isOpen={favoritesOpen} handleClose={handleFavoritesClose} favorites={favorites}/> : null}
          </IconButton>
          <Button color="inherit" onClick={handleModalOpen}>
            Sign Up
            {modalOpen ? <UserModal isOpen={modalOpen} handleClose={handleModalClose}/> : null}
          </Button>
        </Toolbar>
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