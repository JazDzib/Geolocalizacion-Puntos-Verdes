import React, { useEffect, useState } from 'react'
import Narvbar from '../components/navegacion/Narvbar';
import PuntoVerdeCard from '../components/geolocalizacion/PuntoVerdeCard';
import '../router/Geolocalization.css';
import MapCard from '../components/geolocalizacion/MapCard';
const Geolocalization = () => {

  const [state, setState ] = useState({
    longitude : 0,
    latitude : 0
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position){
        setState({
          longitude : position.coords.latitude,
          latitude : position.coords.longitude
        })
      }, 
      function (error){
        console.log(error);
      },
      {enableHighAccuracy: true}
    )
  })
  return (
    <>
      <Narvbar/>
      <div className='geolocalization-conteiner'>
        <div className='content-container'>
          <div className='columna-izquierda'>
            <MapCard/>
          </div>
          <div className='columna-derecha'>
              <PuntoVerdeCard/>
          </div>
        </div>    
      </div>
    </>
    
    
  )
}

export default Geolocalization