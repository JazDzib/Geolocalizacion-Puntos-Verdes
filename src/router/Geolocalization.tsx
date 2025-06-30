import React, { useEffect, useState } from 'react'
import Narvbar from '../components/navegacion/Narvbar';
import PuntoVerdeCard from '../components/geolocalizacion/PuntoVerdeCard';
import '../router/Geolocalization.css';
import MapCard from '../components/geolocalizacion/MapCard';
import { PuntoVerdeDTO } from '../types/PuntoVerdeDTO';
import { useUbication } from '../hooks/useUbication';
import { getPuntosVerde, puntoVerdeMasCercano } from '../services/PuntosVerdeService';
import AgregarPunto from '../components/geolocalizacion/AgregarPunto';
import FormularioAgregar from '../components/geolocalizacion/FormularioAgregar';


const Geolocalization = () => {
  const { locationInfo, isLoading, locationError } = useUbication();
  const [puntoSeleccionado, setPuntoSeleccionado] = useState<PuntoVerdeDTO | null>(null);
  const [puntos, setPuntos]  = useState<PuntoVerdeDTO[]>([]);
  const [activeFormulario, setActiveFormulario] = useState(false);
  
  
  
  // Carga inicial de puntos y selección del más cercano
  useEffect(() => {
     // Solo hacer fetch si tenemos coordenadas y no está cargando
    if (!isLoading && locationInfo) {
      getPuntosVerde()
        .then((data) => {
          setPuntos(data);
          const masCercano = puntoVerdeMasCercano(locationInfo, data);
          setPuntoSeleccionado(masCercano);
        })
        .catch(console.error);
    }
  }, [locationInfo, isLoading]);
  
    if(isLoading)  {
      return(
        <>
          <Narvbar/>
          <div className='alerta-contenedor'>
            <div className='alerta-container'>
              <div className='alerta-info'>
                    <h1>Necesitamos tu ubicación para mostrar los puntos cercanos. Por favor, actívala.  </h1>
              </div>
            </div>    
          </div>
        </>
      )
    } 
         


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
              <AgregarPunto mostrarForm = {setActiveFormulario}/>
          </div>
        </div> 
           {activeFormulario && <FormularioAgregar ocultarForm = {setActiveFormulario}/>} 
      </div>
     
    </>
    
    
  )
}

export default Geolocalization