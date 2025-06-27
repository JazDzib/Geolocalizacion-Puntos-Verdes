import { useEffect, useState } from "react";
import { CoordenadasDTO } from "../types/CoordenadasDTO";

export const useUbication =() => {
    const [locationInfo, setLocationInfo] = useState<CoordenadasDTO | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    
    const defaultCoords: CoordenadasDTO = {
        latitud: 20.993549450478238,
        longitud: -89.62749389964718
    };

    useEffect(() => {
        
        if (!navigator.geolocation) {
            setLocationError("Geolocalización no está disponible en el navegador");
            setLocationInfo(defaultCoords);
            setIsLoading(false);
            return;
        }

        const ubicationAcces = (position: GeolocationPosition) => {     
            setLocationInfo({
                latitud: position.coords.latitude,
                longitud: position.coords.longitude
            });
            setIsLoading(false);
        };

        const ubicationFaild = (error: GeolocationPositionError) => {
            setLocationError(error.message);
            setLocationInfo(defaultCoords);
            setIsLoading(false);
        };

        setIsLoading(true);
        
        navigator.geolocation.getCurrentPosition(ubicationAcces, ubicationFaild,{
            enableHighAccuracy: true,
            
            maximumAge: 0 
        });
    }, []);

    return {
        coordenadas: locationInfo || defaultCoords, // Siempre devuelve coordenadas (las default o las del usuario)
        error: locationError,
        isLoading
    };
};