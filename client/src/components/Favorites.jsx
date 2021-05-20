import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 360,
    },
    nested: {
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.action.selected
    },
  }));

const FavoriteModal = ({ isOpen, handleClose, favorites }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Favorites"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Here is a list of all your favorite Hot Springs.
            </DialogContentText>
            <List>
                {favorites.length > 0 ? favorites.map((favorite, index) => {
                    return (
                        <ListItem key={index} className={classes.nested}>
                            <ListItemText>{favorite.name}, {favorite.sc}</ListItemText>
                        </ListItem>
                    );
                    }) : null}
            </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FavoriteModal;