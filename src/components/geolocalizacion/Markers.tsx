import React, { useEffect, useState } from 'react'
import {  Marker,Popup } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import { getPuntosVerde, puntoVerdeMasCercano } from '../../services/PuntosVerdeService';
import { PuntoVerdeDTO } from '../../types/PuntoVerdeDTO';
import { useUbication } from '../../hooks/useUbication';

/*interface MarkersProps {
  onMarkerClick: (punto: PuntoVerdeDTO) => void;
}

const Markers = () => {

   const [puntos, setPuntos]  = useState<PuntoVerdeDTO[]>([]);
   const {coordenadas} = useUbication();
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
    
  return (
    <>
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
    </>   
  )
}

export default Markers_*/
