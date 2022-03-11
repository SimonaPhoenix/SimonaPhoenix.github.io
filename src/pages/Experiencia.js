import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


function Experiencia(){

    return(

        <div className="carta-box info" id='experiencia' >
            <div className="carta">
                <div className="cara frente">
                    <h2>Experiencia</h2>
                    <FontAwesomeIcon icon={faBriefcase} className='icon'/>
                    
                </div>

                <div className="cara detras">
                    <p>6-jun-2012 a la fecha</p>
                    <p>Administrativo • Jerárquicos Salud</p>
                    <p>Comencé trabajando en el call center en atención de llamados, respuestas a socios vía mail y chat, luego sumado a esto, desempeñe tareas de asistencia en backoffice hasta julio de 2018.</p>
                    <p>Luego desempeñe tareas en gestión de reclamos en el área de Convenios.</p>
                    <p>En 2019 pase al área de Auditoria Medica en gestión de presupuestos.</p>
                    <p>Y recientemente me encuentro en la carga de valores de prestaciones convenidas en el área de GAPyC, gestión administrativa de prestadores y cofinanciadores.</p>  

                </div>
            </div>
        </div>
    )
}

export default Experiencia;