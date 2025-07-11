import React from 'react'
import {Card} from 'flowbite-react'
import logo from '../assets/recycle.svg'
import img from '../assets/papelera-de-reciclaje.png'
import { Link } from 'react-router-dom';
import FormularioRegistro from '../components/Login/FormularioRegistro';
import FormularioLogin from '../components/Login/FormularioLogin';

const Login = () => {
  return (
    <>
    <div className=' min-h-screen  flex justify-between bg-green-100 '>
        
         
        <div className="w-1/2 bg-emerald-400 text-white flex flex-col justify-center items-center text-center px-8">
          <h2 className="text-2xl font-semibold mb-[100px] ">Inicia sesión y sé parte del cambio.</h2>
          <img src={img} alt="Reciclaje" className="w-72 h-auto" />
        </div>
       
        <div className="w-1/2 bg-white flex flex-col px-12 py-8">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="h-10 w-10" />
              <Link to={"/"}>
                <h2 className="text-2xl font-bold text-gray-800">GreenGeo</h2>
              </Link>
          </div>
          <div className='flex-grow flex flex-col justify-center items-center'>
              <div className='register w-full max-w-sm'>
                  <FormularioLogin/>
                  <p className="text-sm text-gray-600 mt-4">
                  ¿No tienes cuenta?{" "}
                  <Link to={"/register"} className="text-emerald-600 hover:underline">
                    Regístrate ya
                  </Link>
                </p>
              </div>
          </div>
                  
        </div>
      </div>
     
    </>
    
  )
}

export default Login