import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HotTubRoundedIcon from '@material-ui/icons/HotTubRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlaceIcon from '@material-ui/icons/Place';
import StarIcon from '@material-ui/icons/Star';

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

const SpringList = ({ springList, setFavorites, favorites }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleClick = (index) => {
        setOpen(!open);
        setSelectedIndex(index);
      };

      const favoritesList = (newSpring) => {
          const bestSprings = [...favorites, newSpring];
          setFavorites(bestSprings);
      };

    if (springList.length !== 0) {
        return (
            <List className={classes.root}>
                <h3>Hot Springs:</h3>
                {springList.map((spring, index) => {
                    return (
                    <>
                        <ListItem key={spring.id} button onClick={() => handleClick(index)} selected={selectedIndex === index}>
                            <ListItemAvatar>
                                <Avatar>
                                    <HotTubRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary={spring.name === 'null' ? spring.name = 'Not Named' : spring.name} 
                            />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={(selectedIndex === index && open) ? open : false} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem className={classes.nested} selected={selectedIndex === spring.id}>
                                    <ListItemIcon>
                                        <WhatshotIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={`Fahrenheit: ${spring.fahrenheit === 'H' ? 'Hot' : spring.fahrenheit === 'W' ? 'Warm' : spring.fahrenheit}`} />
                                </ListItem>
                                <ListItem className={classes.nested} selected={selectedIndex === spring.id}>
                                    <ListItemIcon>
                                       <WhatshotIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={`Celsius: ${spring.celsius === 'H' ? 'Hot' : spring.celsius === 'W' ? 'Warm' : spring.celsius}`} />
                                </ListItem>
                                <ListItem className={classes.nested} selected={selectedIndex === spring.id}>
                                    <ListItemIcon>
                                       <PlaceIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={`State: ${spring.sc}`} />
                                </ListItem>
                                <ListItem className={classes.nested} selected={selectedIndex === spring.id} button onClick={() => favoritesList(spring)}>
                                    <ListItemIcon primary="Starred">
                                            <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary='Favorite' />
                                </ListItem>
                            </List>
                        </Collapse>
                    </>
                    );
                })}
            </List>
        );
    } else {
        return '';
    }
};

export default SpringList;