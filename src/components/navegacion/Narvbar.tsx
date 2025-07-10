import React from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './Narvbar.css';
import NarvbarLateral from './NarvbarLateral';
import { useState } from 'react';
import img from '../../assets/recycle.svg'

const Narvbar = () => {
  const [activeNarvbar, setActiveNarvbar] = useState(false);

  function handleNarvbar() {
    setActiveNarvbar(!activeNarvbar);
  }

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img className="logoimg" src={img} alt="logo" height={40} width={40} />
            <span className="TextLogo">
              <Link to="/">GreenGeo</Link>
            </span>
          </div>
          <div className="menu-container">
            {/* Este es el ícono que abre el menú lateral */}
            <FiMenu className="menu-icon" onClick={handleNarvbar} />
          </div>
        </nav>
      </header>

      {/* Mostrar el menú lateral si está activo */}
         {activeNarvbar && <NarvbarLateral />}

    </>
  );
};

export default Narvbar;