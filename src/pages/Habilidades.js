import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'

function Habilidades(){

    return(

        <div className="carta-box info" id='habilidades'>
            <div className="carta">
                <div className="cara frente">
                    <h2>Habilidades</h2>
                    <FontAwesomeIcon icon={faHandBackFist} className='icon'/>
                </div>

                <div className="cara detras">
                    <h4>COMUNICACION</h4>
                    <p>Luego de 6 años en la atención al público y siendo la comunicación la herramienta principal, tengo facilidad para la oratoria y traspaso de ideas o situaciones de forma asertiva, siendo clara y objetiva para la comprensión de cualquier persona.</p>

                    <h4>OBSERVACION</h4>
                    <p>Mi forma de trabajo es comprometida y siempre busco la manera de aplicar un enfoque basado en los procesos, a fin de poder sugerir y aplicar mejoras continuas.</p>

                </div>
            </div>
        </div>
        
    )
}

export default Habilidades;