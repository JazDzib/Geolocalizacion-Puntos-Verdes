import { useEffect, useState } from "react";
import { CoordenadasDTO } from "../types/CoordenadasDTO";

export const useUbication =() => {
    //const [locationInfo, setLocationInfo] = useState<CoordenadasDTO | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false); 
    const [hasRealUbication, setHasRealUbication] = useState(false);

    
   const [locationInfo, setLocationInfo] = useState<CoordenadasDTO>({
        latitud: 20.993549450478238,
        longitud: -89.62749389964718
        });

    useEffect(() => {

        const ubicationAcces = (position: GeolocationPosition) => {    
             
            setLocationInfo({ 
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
            setHasRealUbication(true);
            setIsLoading(false)
        };

        const ubicationFaild = (error: GeolocationPositionError) => {
            setLocationError(error.message);
            setIsLoading(false);
        };

        const solicitaUbicacion = () =>{
            if (!navigator.geolocation) { //si no autorizo la ubicacion 
            setLocationError("Geolocalización no está disponible en el navegador");
            return;
            }
            setIsLoading(true)

            navigator.geolocation.getCurrentPosition(ubicationAcces , ubicationFaild, {
            enableHighAccuracy: true,
            maximumAge: 0 
            });
        }

        solicitaUbicacion();
        
        
    }, []);

    return {
        locationInfo, // Siempre devuelve coordenadas (las default o las del usuario)
        locationError,
        isLoading,
        
    };
};