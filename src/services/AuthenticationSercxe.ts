import axios from "axios";
import { AuthResponse, LoginDTO, RegisterDTO } from "../types/Authentication";

const apiURL = window._env_.REACT_APP_API_URL;



export const authService ={
   async login(usuario :LoginDTO): Promise<LoginDTO[]>  {
        try{
            const response =  await axios.post(`${apiURL}/auth/login` , usuario);
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
        const response = await axios.post(`${apiURL}/auth/register`, usuario);
        return response.data;
        }catch(e){
            console.log("Error en el registro", e);
            return[];
        }
    }

}