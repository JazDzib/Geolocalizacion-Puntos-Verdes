import {useEffect,useState} from 'react'
import axios from 'axios';
import {PuntoVerdeDTO} from '../types/PuntoVerdeDTO';

const baseURL = "http://localhost:8080/api/PuntoVerde"
const username = 'admin';
const password = 'holabola';

const credentials = btoa(`${username}:${password}`);

export const getPuntosVerde = async (): Promise<PuntoVerdeDTO[]> => {
  const response = await axios.get<PuntoVerdeDTO[]>(baseURL, {
    headers: {
      Authorization: `Basic ${credentials}`
    }
  });
  return response.data;
};
const PuntosVerdeService = () => {

    /*const [markers, setMarkers]  = useState(null)

  useEffect(() =>{
    axios.get(baseURL).then((response)=>{setMarkers(response.data);
    });
  }, []);

  if(!markers) return null;*/

}

