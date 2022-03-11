import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'






function Contacto(){

    return(
        <div className="carta-box info" id='contacto' >
            <div className="carta">
                <div className="cara frente">
                    <h2>Contacto</h2>
                    <FontAwesomeIcon icon={faAddressBook} className="icon"/>
                </div>

                <div className="cara detras">
                    <p><FontAwesomeIcon icon={faEnvelope} /> flores_agostina@hotmail.com</p>
                    <a href="https://www.linkedin.com/in/agostina-flores-735939179/"><FontAwesomeIcon icon={faLinkedin} /> www.linkedin.com/in/agostina-flores-735939179</a>
                    <p><FontAwesomeIcon icon={faGlobe} / > Santa Fe, CP 3000, Argentina</p> 
                </div>
            </div>
        </div>
    )
}

export default Contacto;