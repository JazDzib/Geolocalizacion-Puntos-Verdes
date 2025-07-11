import React, { ChangeEvent, FormEvent } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { LoginDTO, RegisterDTO } from '../../types/Authentication';
import { authService } from '../../services/AuthenticationSercxe';
import { useState } from 'react';

const FormularioLogin = () => {
   const [usuarioData, setUsuarioData] = useState<LoginDTO>({
      email:" ",
      password : " "
    })
     
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name,value } = e.target;
          
          if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
            setUsuarioData({ ...usuarioData, [name]: value });
          
          } else {
            setUsuarioData({ ...usuarioData, [name]: value });
          }    
    }
  
    const handleSubmmit = async(e : FormEvent) =>{
        e.preventDefault();
    
        console.log('form data subnited: ', usuarioData)
    
        try{
          await authService.login(usuarioData);
           // cierra el modal
        }catch(e){
          console.error("Error al enviar los datos:", e);
        }
    
      }
  return (
        <div >
            <Card className="">
                <form className="flex flex-col gap-4"   onSubmit={handleSubmmit}>                    
                  <div>
                    <Label className='!text-black' htmlFor="email">Correo</Label>
                    <TextInput id="email" type="email" placeholder="ejemplo@correo.com" name='email' value={usuarioData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label className='!text-black' htmlFor="password">Contraseña</Label>
                    <TextInput id="password" type="password" name='password' value={usuarioData.password} onChange={handleChange} required />
                  </div>
                  <div className='flex justify-center'>
                    
                      <Button type="submit" color="primary" className="bg-emerald-500 hover:bg-emerald-600 self-center">
                        Iniciar Sesión
                      </Button>
                    
                  </div>
                </form>
              </Card>
              </div>
  )
}

export default FormularioLogin