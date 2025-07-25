import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from "react-leaflet"; 
import { useUbication } from '../../hooks/useUbication';
import {  Marker,Popup } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { getPuntosVerde, puntoVerdeMasCercano } from '../../services/PuntosVerdeService';
import { PuntoVerdeDTO } from '../../types/PuntoVerdeDTO';
import "leaflet/dist/leaflet.css";

import '../geolocalizacion/MapCard.css'

interface MapCardProps {
  puntos: PuntoVerdeDTO[];  // Array de puntos verdes
  onMarkerClick: (punto: PuntoVerdeDTO) => void;
}
const MapCard: React.FC<MapCardProps> = ({ puntos, onMarkerClick }) => {

    const descripcion = "Un centro de reciclaje ubicado en una zona urbana que recibe y procesa residuos reciclables. Su objetivo es reducir la contaminación y promover la reutilización de materiales";
    const direccion ="";
      const { locationInfo, locationError, isLoading } = useUbication();
      
    
       if (isLoading) {
        return <div>Cargando ubicación...</div>;  
      }
      
  return (
    <div className='map-card-container'>
        <span className='centros'><b>Centros de reciclaje cerca de tí</b></span>
        <div className='map-view-container'>
             <MapContainer center={[locationInfo?.latitud , locationInfo?.longitud ]} zoom={14} zoomControl={false}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />  
                {puntos.map((punto) => (
                  <Marker
                    key={punto.id}
                    position={[punto.latitud, punto.longitud]}
                    icon={IconLocation}
                    eventHandlers={{
                      click: () => onMarkerClick(punto)
                    }}
                  >
                    <Popup>{punto.nombre}</Popup>
                  </Marker>
                ))}
              </MapContainer>
        </div>
        <div className='punto-information'>
            <span> <b>Descripcion: </b>{descripcion}</span>
            
        </div>
    </div>
  )
}

export default MapCard