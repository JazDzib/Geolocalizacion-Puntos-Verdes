import React from 'react'
import { Link } from 'react-router-dom'
import '../navegacion/NarvbarLateral.css'

interface Props {
  onClose: () => void;
}

const NarvbarLateral = () => {
  return (
    <div className="narvbar-lateral">
      <ul>
        <li>
          <Link to="/perfil" className="ruta">Perfil</Link>
        </li>
        <li>
          <Link to="/notificaciones" className="ruta">Notificaciones</Link>
        </li>
        <li>
          <Link to="/map" className="ruta">Centros de reciclaje</Link>
        </li>
      </ul>
    </div>
  );
};

export default NarvbarLateral;