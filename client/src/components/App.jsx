import React, { useState } from 'react';
import axios from 'axios';
import SpringList from './SpringList.jsx';
import styled from 'styled-components'

const App = () => {
    const [stateCode, setStateCode] = useState('');
    const [springList, setSpringList] = useState([]);

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
        <div>
        <h1>Soaked</h1>
            <form>
                <label>Search Hot Springs in your area (ex: 'AK'): </label>
                <input type='text' onChange={handleChange}></input>
                <button onClick={search}>Search</button>
            </form>
            <div>
                <SpringList springList={springList}/>
            </div>
        </div>
    );
};

export default App;