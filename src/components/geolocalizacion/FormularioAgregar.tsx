import React, { useEffect, useState } from 'react'
import '../geolocalizacion/FormularioAgregar.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { postPuntoVerde } from '../../services/PuntosVerdeService';
import { PuntoVerdeDTO } from '../../types/PuntoVerdeDTO';

type Props = {
  ocultarForm: (value: boolean) => void;
};
const FormularioAgregar = ({ocultarForm}: Props) => {
  
  const enviarPunto = async() =>{
   
  }
  return (
    <div className="contenedor-formulario">
      <div className='forumulario-card'>
        <div className='boton de cierre'> 
        <IoMdCloseCircleOutline  className = 'button-cierre' onClick={() => ocultarForm(false)}/>
        </div>
        <div className='formulario'>
          <form>
            <label > Nombre del centro de reciclaje: </label>
            <input type="text" placeholder="Nombre" />
            <label >  Descripcion: </label>
            <input type="text" placeholder="Descripcion" />
            <label >  Direccion: </label>
            <input type="text" placeholder="Direccion" />
            <label >  Latitud: </label>
            <input type="text" placeholder="Latitud" />
            <label >  Longitud: </label>
            <input type="text" placeholder="Longitud" />
            <label >  Categoria: </label>
            <select className='categorias'>
              <option value={"PAPEL_CARTON"}>Papel o Cartón</option>
              <option value={"VIDRIO"}>Vidrio</option>
              <option value={"PLASTICO"}>Plastico</option>
              <option value={"ORGANICO"}>Organico</option>
              <option value={"PELIGROSO"}>Peligroso</option>
              <option value={"ELECTRONICO"}>Electronico</option>
            </select>
            <label >  Imagen: </label>
            <input type="text" placeholder="Introduce la url de la imagen" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormularioAgregar;
