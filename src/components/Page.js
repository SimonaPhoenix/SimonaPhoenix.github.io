import React from "react";
import './../styles/pages/page.css'

import Contacto from '../pages/Contacto'
import Informacion from '../pages/Informacion'
import Formacion from '../pages/Formacion'
import Habilidades from "../pages/Habilidades";
import Experiencia from "../pages/Experiencia";

function Page(){

    return(
        <div className="main">
            <Informacion />
            <Experiencia />
            <Habilidades />
            <Formacion />
            <Contacto />
        </div>
    )
}

export default Page;