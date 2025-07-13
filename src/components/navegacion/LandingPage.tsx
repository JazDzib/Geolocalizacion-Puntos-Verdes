import React from 'react'
import './LandingPage.css'
import centro from '../../assets/reciclar.png';


const LandingPage = () => {
  return (
   <div className='Contenido'>
          <div className='Texto'>
            <p>
            Bienvenido a <span> GreenGeo </span> esta es una plataforma para ayudarte a localizar facilmente los <span> puntos verdes </span>más cercanos
            a tu ubicación. Utiliza tecnología de geolocalización, el sistema muestra en un mapa interactivo los centros de acopio donde puedes llevar materiales reciclables
            como papel, cartón, vidrio, plástico, entre otros. La idea principal es facilitar el acceso acestos lugares y fomentar el reciclaje como parte de un estilo 
            de vida más consciente y sostenible.
            </p>

            <p>
            A través de esta plataforma los usuarios regisrados pueden sugerir nuevos puntos verdes ayudando a construir una red colaborativa de reciclaje. De esta forma, 
            no solo accedes a información útil sino que también puedes contribuir activamente al cuidado del medio ambiente. Esta herramienta nace con el objetivo de 
            promover la participación ciudadana dentro del modelo de economía circular, conectando a las personas con los espacios donde pueden hacer la diferencia.
           
            </p>     
             
           
          </div>
          <div className='ImagenLP'><img src={centro} width={300} height={300} alt='imagen'/> </div>
        </div>
  )
}

export default LandingPage