import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { RegisterDTO } from '../../types/Authentication';
import { authService } from '../../services/AuthenticationService';
const FormularioRegistro = () => {
  const navigate = useNavigate( );
  const [usuarioData, setUsuarioData] = useState<RegisterDTO>({
    nombre : "",
    correo: "",
    contrasenia :""
  })
   
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const {name,value } = e.target;
        
        if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
          setUsuarioData({ ...usuarioData, [name]: value });
        
        } else {
          setUsuarioData({ ...usuarioData, [name]: value });
        }    
  }

  const handleSubmmit = async(e : FormEvent) =>{
      e.preventDefault();
  
      console.log('usuario Registrado')
  
      try{
        await authService.register(usuarioData);
        navigate("/login")
         // cierra el modal
      }catch(e){
        console.error("Error al enviar los datos:", e);
      } 
    }

  return (
    
       <div >
        <Card className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmmit}>
                <div>
                <Label  htmlFor="nombre" className='!text-black'>Nombre</Label>
                <TextInput className='text-black' id="nombre" type="text" name='nombre' value={usuarioData.nombre} onChange={handleChange} required />
              </div>
              <div>
                <Label  htmlFor="email" className='!text-black'>Correo</Label>
                <TextInput id="email" type="email" placeholder="ejemplo@correo.com" name='correo' value={usuarioData.correo} onChange={handleChange} required />
              </div>
              <div>
                <Label className='!text-black' htmlFor="password">Contraseña</Label>
                <TextInput id="password" type="password" name='contrasenia' value={usuarioData.contrasenia} onChange={handleChange} required />
              </div>
              <div className='flex justify-center'>
               
              <Button type="submit" color="primary" className="bg-emerald-500 hover:bg-emerald-600 self-center">
                Registrar
              </Button>
              
              </div>
            </form>
          </Card>
          </div>
   
      
  )
}

export default FormularioRegistro