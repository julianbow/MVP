import React, { useState } from 'react';
import axios from 'axios';
import SpringList from './SpringList.jsx';
import Map from './GoogleMaps.jsx';
import Header from './Header.jsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(7),
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
      backgroundColor: theme.palette.primary.main,
    },
  }));

const App = () => {
    const [stateCode, setStateCode] = useState('');
    const [springList, setSpringList] = useState([]);
    const classes = useStyles();

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
        <Header />
        <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SearchRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
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
    </>
    );
};

export default App;