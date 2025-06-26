import React from "react";
import { MapContainer, TileLayer } from "react-leaflet"; 
import Markers from "./Markers";
import { useUbication } from "../../hooks/useUbication";
import { CoordenadasDTO } from "../../types/CoordenadasDTO";
import "leaflet/dist/leaflet.css";
import './MapView.css'



const MapView = ( ) => {
  const { coordinates, error, isLoading } = useUbication();
   if (isLoading) {
    return <div>Cargando ubicación...</div>;  
  }

   return(
    <div  className="mapa-container" >
      <MapContainer center={[coordinates?.latitude , coordinates?.longitud ]} zoom={14} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers/>
    </MapContainer>
    </div>
   );     
}

export default MapView;



