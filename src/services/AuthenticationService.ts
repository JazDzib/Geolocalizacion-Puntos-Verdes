import axios from "axios";
import { AuthResponse, LoginDTO, RegisterDTO } from "../types/Authentication";
import  { jwtDecode } from 'jwt-decode'
const apiURL = window._env_.REACT_APP_API_URL;


interface JwtPayload {
  exp: number // Fecha de expiración en segundos desde epoch
  // puedes agregar otros campos si quieres
}



export function isTokenValid(): boolean {
    const token = localStorage.getItem("token");
    if(token == null ){
        return false
    }
  try {
    const decoded = jwtDecode<JwtPayload>(token)
    const currentTime = Math.floor(Date.now() / 1000) // en segundos

    return decoded.exp > currentTime
  } catch (error) {
    console.error('Token inválido:', error)
    return false
  }
}




export const authService ={
   async login(usuario :LoginDTO): Promise<LoginDTO[]>  {
        try{
            const response =  await axios.post(`${apiURL}/api/auth/login` , usuario);
            const token = response.data.token;
            localStorage.setItem("token", token);

            return response.data;      
        }catch(e){
            console.log("Error de inicio de sesión",e);
            return [];
        }
   },

    async register(usuario: RegisterDTO): Promise<RegisterDTO[]>  {
        try{
        const response = await axios.post(`${apiURL}/api/auth/register`, usuario);
        return response.data;
        }catch(e){
            console.log("Error en el registro", e);
            return[];
        }
    }

    
}
