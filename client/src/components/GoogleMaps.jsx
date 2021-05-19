import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '../../../API/APIconfig.js';

const containerStyle = {
  width: '700px',
  height: '600px',
  'float': 'right',
  'marginTop': '130px',
  'marginRight': '30px'
};

const center = {
  lat: 40.4849769,
  lng: -106.8317158
};

function Map() {
  return (
    <iframe 
    src="https://www.google.com/maps/d/u/0/embed?mid=14ht1iTXTyu21vx4tu8pnDasyhy9tGhV_" 
    style={containerStyle}
    >
    </iframe>
  )
}

export default React.memo(Map)