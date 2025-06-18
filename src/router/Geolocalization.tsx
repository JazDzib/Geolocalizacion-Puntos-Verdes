import React from 'react'
import Narvbar from '../components/navegacion/Narvbar';
import PuntoVerdeCard from '../components/geolocalizacion/PuntoVerdeCard';
import '../router/Geolocalization.css';
import MapCard from '../components/geolocalizacion/MapCard';
const Geolocalization = () => {
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