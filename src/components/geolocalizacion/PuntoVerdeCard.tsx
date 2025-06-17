import React from "react";
import "./PuntoVerdeCard.css";

const PuntoVerdeCard= () => {
    return(
    <div className="container-punto-card">
        <div className="nombre-punto">
            <h3>Título del Punto Verde</h3>
        </div>
        <div className="imagen-punto">
            <img alt="imagen punto verde" src="https://www.mexicoescultura.com/galerias/espacios/principal/tizimin.jpg"/>
        </div>
        <div className="comentarios">
            <p>Aquí se mostrarán los comentarios del punto.</p>
        </div>
        <div className="comentario-card">
            <input className="comment" type="text" name="comment" id="comment" placeholder="Comenta..." />
        </div>
    </div>

    );
}
export default PuntoVerdeCard;