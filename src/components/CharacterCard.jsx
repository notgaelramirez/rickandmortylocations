import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CharacterCard = ({resident}) => {

  let [residentData, setResidentData] = useState()

  useEffect(() => {
    
    axios.get(resident)
      .then(res => setResidentData(res?.data))
  }, [])

  console.log(residentData)
  
  return (
    
      <div className='character-card'>
        <div className="card-container">
          <img src={residentData?.image} alt="" />
          <p><b>Name: </b>{residentData?.name}</p>
          <p><b>Status: </b>{residentData?.status}</p>
          <p><b>Episodes: </b>{residentData?.episode.length}</p>
          <p><b>Origin: </b>{residentData?.origin.name}</p>
        </div>
      </div>
    
  )
}

export default CharacterCard 