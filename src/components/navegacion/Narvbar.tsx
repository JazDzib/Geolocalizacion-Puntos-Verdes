import React from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './Narvbar.css';
import NarvbarLateral from './NarvbarLateral';
import { useState } from 'react';

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
            <img className="logoimg" src="" alt="logo" />
            <span className="TextLogo">
              <Link to="/">EcoTips</Link>
            </span>
          </div>

          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Busqueda..."
                className="search-input"
              />
            </div>
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