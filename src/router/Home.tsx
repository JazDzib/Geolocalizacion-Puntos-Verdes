import React from 'react'
import Narvbar from '../components/navegacion/Narvbar';
import { Button } from "flowbite-react";
const Home = () => {
  return (
    <div  className="p-4"><Narvbar/>
     
      <Button>Probar Flowbite</Button>
    </div>
    
  )
}

export default Home