import React from 'react'

const containerStyle = {
  width: '700px',
  height: '600px',
  'float': 'right',
  'marginTop': '130px',
  'marginRight': '30px'
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