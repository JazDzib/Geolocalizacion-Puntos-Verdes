import React from "react";
import { MapContainer, TileLayer } from "react-leaflet"; 
import "leaflet/dist/leaflet.css";


const MapView = ( ) => {
   return(
  <MapContainer center={{ lat: 21.145477, lng: -88.153592 }} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
   );     
}

export default MapView;



