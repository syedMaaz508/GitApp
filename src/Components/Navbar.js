// just type rfc for react function based component boiler plate

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  


    return (

     
        // <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
        <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode==='light'?'info':'dark'}`} style={{borderBottom:props.mode==='dark'?'.5px solid white':'none',borderTop:props.mode==='dark'?'.5px solid white':'none'}}>
        <div className="container-fluid">
          <Link data-bs-toggle="tooltip" data-bs-placement="top" title="By Syed Maaz" className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} to="/" style={{fontSize:'25px',fontWeight:'bold',fontFamily:'sans-serif'}} >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
             
            <span className="navbar-toggler-icon" style={{height:'20px'}}>▼</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} to="/about" >
                  {props.aboutusText}
                </Link>
              </li>
            </ul>
            
          
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{cursor:'pointer'}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
            </div>
           
          </div>
        </div>
        
      </nav>
    )
}

// we have given object to our component in which we are defining the datatype for our props
Navbar.proptype={
    title:PropTypes.string,
    aboutusText:PropTypes.string,
}

// we have given object to our component in which we are defining the default value for our props
// Navbar.defaultProps={
//     title:"Write Title Here",
//     aboutusText:"Write About Here"
// }

