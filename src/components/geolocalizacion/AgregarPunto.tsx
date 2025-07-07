import React, { useState } from 'react'
import '../geolocalizacion/AgregaPunto.css';
import { Link } from 'react-router-dom';

type Props = {
  mostrarForm: (value: boolean) => void;
};
const AgregarPunto= ({mostrarForm}: Props) => {

  return (
    <div className='agregar-conteiner'>
      <h3>Ayúdanos a mejorar el mapa: comparte un centro de reciclaje que conozcas.
      </h3>
      <Link to={"/Register"}>
      <button className='agregar' /*onClick={() => mostrarForm(true)}*/ > Agregar </button>
      </Link>
      
    </div>
  );
};


export default AgregarPunto