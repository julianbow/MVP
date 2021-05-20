import React from 'react'

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

const Map = () => {
  return (
    <iframe 
    src="https://www.google.com/maps/d/u/0/embed?mid=1CqUjeYu6oatbpI3dDt-0nkFnJzBW8nSq" 
    style={containerStyle}
    >
    </iframe>
  )
}

export default Map;