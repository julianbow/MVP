import React, { useState } from 'react';
import axios from 'axios';
import SpringList from './SpringList.jsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
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
      width: '100%', // Fix IE 11 issue.
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
        // <div>
        // <h1>Soaked</h1>
        //     <form>
        //         <label>Search Hot Springs in your area (ex: 'AK'): </label>
        //         <input type='text' onChange={handleChange}></input>
        //         <button onClick={search}>Search</button>
        //     </form>
        //     <div>
        //         <SpringList springList={springList}/>
        //     </div>
        // </div>
        <Container component="main" maxWidth="xs">
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
    );
};

export default App;