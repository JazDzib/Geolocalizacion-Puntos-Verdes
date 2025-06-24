import React from 'react'
import MapView from './MapView'
import '../geolocalizacion/MapCard.css'

const MapCard = () => {
    const descripcion = "Un centro de reciclaje ubicado en una zona urbana que recibe y procesa residuos reciclables. Su objetivo es reducir la contaminación y promover la reutilización de materiales";
    const direccion ="";
  return (
    <div className='map-card-container'>
        <h3>Centros de reciclaje cerca de tí</h3>
        <div className='map-view-container'>
            <MapView/>
        </div>
        <div className='punto-information'>
            <span> <b>Descripcion: </b>{descripcion}</span>
            <span> <b>Direccion: </b>{descripcion}</span>
        </div>
    </div>
  )
}

export default MapCard