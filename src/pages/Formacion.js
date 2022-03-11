import React from "react";
import formacion from './../formacion.json'
import FormacionCard from './../components/FormacionCard'
import './../styles/pages/formacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Formacion(){

    return(
        <div className="carta-box info" >
            <div className="carta" id='formacion'>
                <div className="cara frente">
                    <h2>Formacion</h2>
                    <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                </div>

                <div className="cara detras">
                {
                formacion.map(estudio=>
                        <div className="uno">
                        <FormacionCard id={estudio.id} titulo={estudio.lugar} estado={estudio.estado} />                        
                        <hr />
                        </div>
                )
                }</div>
            </div>
        </div>

        
    )
}

export default Formacion;