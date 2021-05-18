import React, { useState } from 'react';
import axios from 'axios';
import SpringList from './SpringList.jsx';
import Map from './GoogleMaps.jsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(8),
        float: 'left'
    },
    map: {
        float: 'right'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const App = () => {
    const [stateCode, setStateCode] = useState('');
    const [springList, setSpringList] = useState([]);
    const classes = useStyles();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );

    const handleChange = (e) => {
        setStateCode(e.target.value);
    };

    const search = (e) => {
        e.preventDefault();
        axios.get(`/springs/${stateCode}`)
        .then((response) => {
            setSpringList(response.data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        })
    }

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SearchRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search Hot Springs 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="sc"
              label="State Code"
              name="sc"
              autoFocus
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={search}
            >
              Search
            </Button>
          </form>
        </div>
        <div>
             <SpringList springList={springList}/>
        </div>
      </Container>
      <Container>
        <Map />
      </Container>
    </ThemeProvider>
    </>
    );
};

export default App;