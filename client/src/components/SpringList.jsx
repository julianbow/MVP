import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HotTubRoundedIcon from '@material-ui/icons/HotTubRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  }));

const SpringList = ({ springList }) => {
    const classes = useStyles();

    if (springList.length !== 0) {
        return (
            <List className={classes.root}>
                <h3>Hot Springs:</h3>
                {springList.map((spring) => {
                    return (
                    <ListItem key={spring.id} button>
                        <ListItemAvatar>
                            <Avatar>
                                <HotTubRoundedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>{spring.name === 'null' ? spring.name = 'Not Named' : spring.name}</ListItemText>
                    </ListItem>
                    );
                })}
            </List>
        );
    } else {
        return '';
    }
};

export default SpringList;