import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'


function Informacion(){

    return(
        <div className="carta-box info" id='informacion'>
            <div className="carta">
                <div className="cara frente">
                    <h2>Sobre Mi</h2>
                    <FontAwesomeIcon icon={faBook} className='icon' />
                </div>

                <div className="cara detras">
                    <p>Soy una persona muy curiosa, me gusta investigar y hacer mio los temas o rubros que despiertan mi atención. Por tal motivo comence a descubrir la programacion, indagar, volverme autodidacta y comenzar un camino que es de constante evolucion y expancion.</p>
                    <p>Por lo antes mencionado, me encuentro en la busqueda de cambios a nivel laboral.</p>
                    <p>Quisiera desempeñarme en el rubro de la tecnologia, y poder ampliar mis conocimientos y sumar tambien experiencia.</p>
                </div>
                </div>
        </div>
        
    )
}

export default Informacion;