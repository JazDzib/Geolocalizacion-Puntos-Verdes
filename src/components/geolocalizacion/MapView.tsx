import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from "react-leaflet"; 
import { useUbication } from '../../hooks/useUbication';
import {  Marker,Popup } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { getPuntosVerde, puntoVerdeMasCercano } from '../../services/PuntosVerdeService';
import { PuntoVerdeDTO } from '../../types/PuntoVerdeDTO';
import "leaflet/dist/leaflet.css";
import './MapView.css'



/*const MapView = ( ) => {
  const { coordenadas, error, isLoading } = useUbication();
  const [puntos, setPuntos]  = useState<PuntoVerdeDTO[]>([]);
  const [puntoVerdeSeleccionado, setVerdeSeleccionado] = useState <PuntoVerdeDTO | null >(null);
  
    useEffect(() => {
      getPuntosVerde()
        .then((data) => {
          setPuntos(data);
          // Opcional: seleccionar el más cercano automáticamente
          const masCercano = puntoVerdeMasCercano(coordenadas, data);
          setVerdeSeleccionado(masCercano);
        })
        .catch(console.error);
    }, [coordenadas]);

   if (isLoading) {
    return <div>Cargando ubicación...</div>;  
  }

   return(
    <div  className="mapa-container" >
      <MapContainer center={[coordenadas?.latitud , coordenadas?.longitud ]} zoom={14} >
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
                  click: () =>{
                    
                  }
                }}
              >
                <Popup>{punto.nombre}</Popup>
              </Marker>
            ))}
    </MapContainer>
    </div>
   );     
}

export default MapView;


*/
