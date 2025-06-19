import React from 'react'
import {  Marker,Popup } from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Markers = () => {
    
  return (
     <Marker position={[21.142392, -88.150530 ]} icon={IconLocation}>
      <Popup>¡Soy un marcador personalizado!</Popup>
    </Marker>
  )
}

export default Markers
