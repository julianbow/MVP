import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '../../../API/APIconfig.js';

const containerStyle = {
  width: '600px',
  height: '600px',
  'float': 'right',
  'marginTop': '130px',
  'marginRight': '40px'
};

const center = {
  lat: 40.4849769,
  lng: -106.8317158
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={config.API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)