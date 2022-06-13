import React from 'react'

const LocationInfo = ({data}) => {


  return (
    <div className='location-card'>
      <h3 className='location-h3'>Location: {data?.name}</h3>
  
      <div className="second-line">
        <p><b>Type:</b> {data?.type}<br></br></p>
        <p><b>Dimension:</b> {data?.dimension}</p>
        <p><b>Residents:</b> {data?.residents.length}</p>
      </div>
    </div>
  )
}

export default LocationInfo