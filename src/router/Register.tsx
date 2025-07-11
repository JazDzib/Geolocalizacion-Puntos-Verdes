import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import FormularioRegistro from '../components/Login/FormularioRegistro';
import logo from '../assets/recycle.svg'
import img from '../assets/papelera-de-reciclaje.png'
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
      <div className=' min-h-screen  flex justify-between bg-green-100 '>
        
        <div className="w-1/2 bg-white flex flex-col px-12 py-8">
          <div className="flex items-center gap-2 mb-8 self-start">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <Link to={"/"}>
            <h2 className="text-2xl font-bold text-gray-800">GreenGeo</h2>
            </Link>
            
          </div>
          <div className='flex-grow flex flex-col justify-center items-center'>
              <div className='register w-full max-w-sm'>
              <FormularioRegistro/>
              
            
            </div> 
          </div>       
        </div>
          
        <div className="w-1/2 bg-emerald-400 text-white flex flex-col justify-center items-center text-center px-8">
          <h2 className="text-2xl font-semibold mb-6 mb-[100px]">Juntos hacemos del reciclaje un hábito, no una opción.</h2>
          <img src={img} alt="Reciclaje" className="w-72 h-auto" />
        </div>
      </div>
    </> 
  )
}

export default Register