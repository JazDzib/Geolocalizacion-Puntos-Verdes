import React, { useState } from 'react'
import '../geolocalizacion/AgregaPunto.css';
import { Link, useNavigate } from 'react-router-dom';
import { isTokenValid } from '../../services/AuthenticationService';

type Props = {
  mostrarForm: (value: boolean) => void;
};
const AgregarPunto= ({mostrarForm}: Props) => {
  const navigate = useNavigate();

  const handClick = () =>{
  
    if(isTokenValid()){
      mostrarForm(true);
    }else{
      navigate("/login")
    }
  }
  
  return (
    <div className='agregar-conteiner'>
      <h3>Ayúdanos a mejorar el mapa: comparte un centro de reciclaje que conozcas.
      </h3>     
      <button className='agregar' onClick={handClick} > Agregar </button>
    </div>
  );
};


export default AgregarPunto