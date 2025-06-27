import React, { useEffect, useState } from 'react'
import Narvbar from '../components/navegacion/Narvbar';
import PuntoVerdeCard from '../components/geolocalizacion/PuntoVerdeCard';
import '../router/Geolocalization.css';
import MapCard from '../components/geolocalizacion/MapCard';
import { PuntoVerdeDTO } from '../types/PuntoVerdeDTO';
import { useUbication } from '../hooks/useUbication';
import { getPuntosVerde, puntoVerdeMasCercano } from '../services/PuntosVerdeService';


const Geolocalization = () => {
   const { coordenadas } = useUbication();
  const [puntoSeleccionado, setPuntoSeleccionado] = useState<PuntoVerdeDTO | null>(null);
  const [puntos, setPuntos]  = useState<PuntoVerdeDTO[]>([]);

  // Carga inicial de puntos y selección del más cercano
  useEffect(() => {
    getPuntosVerde()
      .then((data) => {
        setPuntos(data);
        if (coordenadas) {
          const masCercano = puntoVerdeMasCercano(coordenadas, data);
          setPuntoSeleccionado(masCercano);
        }
      })
      .catch(console.error);
  }, [coordenadas]);
        
         

  return (
    <>
      <Narvbar/>
      <div className='geolocalization-conteiner'>
        <div className='content-container'>
          <div className='columna-izquierda'>
            <MapCard  puntos={puntos} 
              onMarkerClick={setPuntoSeleccionado} />
          </div>
          <div className='columna-derecha'>
              <PuntoVerdeCard  punto={puntoSeleccionado}/>
          </div>
        </div>    
      </div>
    </>
    
    
  )
}

export default Geolocalization