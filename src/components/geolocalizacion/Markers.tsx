import React, { useEffect, useState } from 'react'
import {  Marker,Popup } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { getPuntosVerde } from '../../services/PuntosVerdeService';
import { PuntoVerdeDTO } from '../../types/PuntoVerdeDTO';


const Markers = () => {

   const [puntos, setPuntos]  = useState<PuntoVerdeDTO[]>([]);

  useEffect(() =>{
    getPuntosVerde().then(setPuntos).catch(console.error);
  }, []);
    
  return (
    <>
      {puntos.map((punto) => (
      <Marker key={punto.id} position={[punto.latitud, punto.longitud ]} icon={IconLocation}>
        <Popup>{punto.nombre}</Popup>
      </Marker>
      ))}
    </>   
  )
}

export default Markers
