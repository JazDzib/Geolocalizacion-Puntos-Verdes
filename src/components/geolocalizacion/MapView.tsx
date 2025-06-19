import React from "react";
import { MapContainer, TileLayer } from "react-leaflet"; 
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";
import './MapView.css'



const MapView = ( ) => {
   return(
    <div  className="mapa-container" >
      <MapContainer center={{ lat: 21.142392, lng: -88.150530 }} zoom={14} >
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



