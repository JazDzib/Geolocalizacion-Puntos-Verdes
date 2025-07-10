import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';

const FormularioLogin = () => {
  return (
        <div >
            <Card className="">
                <form className="flex flex-col gap-4">
                    
                  <div>
                    <Label className='!text-black' htmlFor="email">Correo</Label>
                    <TextInput id="email" type="email" placeholder="ejemplo@correo.com" required />
                  </div>
                  <div>
                    <Label className='!text-black' htmlFor="password">Contraseña</Label>
                    <TextInput id="password" type="password" required />
                  </div>
                  <div className='flex justify-center'>
                    <Link to={"/map"}>
                      <Button type="submit" color="primary" className="bg-emerald-500 hover:bg-emerald-600 self-center">
                        Iniciar Sesión
                      </Button>
                    </Link>
                  </div>
                </form>
              </Card>
              </div>
  )
}

export default FormularioLogin