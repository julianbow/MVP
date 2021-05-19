import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const FavoriteModal = ({ isOpen, handleClose, favorites }) => {
    console.log(favorites);
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Favorites"}</DialogTitle>
        <DialogContent>
            <List>
            Here is a list of all your favorite Hot Springs.
                {favorites.length > 0 ? favorites.map((favorite, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemText>{favorite.name}</ListItemText>
                        </ListItem>
                    );
                    }) : null}
            </List>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FavoriteModal;