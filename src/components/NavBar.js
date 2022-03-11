import React from "react";
import { NavLink } from "react-router-dom";

import './../styles/components/nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEject } from '@fortawesome/free-solid-svg-icons'



function NavBar(){

    return(

        <div>
            <nav className="nav">
            <ul className="navUl">
                <NavLink activeClassName="activo" className="box" exact to='/informacion'>Informacion</NavLink>
                <NavLink activeClassName="activo" className="box" exact to='/experiencia'>Experiencia</NavLink>
                <NavLink activeClassName="activo" className="box" exact to='/habilidades'>Habilidades</NavLink>
                <NavLink activeClassName="activo" className="box" exact to='/formacion'>Formacion</NavLink>
                <NavLink activeClassName="activo" className="box" exact to='/contacto'>Contacto</NavLink>
            </ul>
        </nav>
        <nav className="navres">
        <FontAwesomeIcon icon={faEject} className='iconRes'/>
            <ul className="ulRes">
                <NavLink className="box" exact to='/informacion'>Informacion</NavLink>
                <NavLink className="box" exact to='/experiencia'>Experiencia</NavLink>
                <NavLink className="box" exact to='/habilidades'>Habilidades</NavLink>
                <NavLink className="box" exact to='/formacion'>Formacion</NavLink>
                <NavLink className="box" exact to='/contacto'>Contacto</NavLink>
            </ul>
        </nav>
        </div>
        
    )
}

export default NavBar;