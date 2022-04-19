import React from "react";
import './challenge.css'
import logo from './LOGO.png'

 function Header() {
    
   

    return (
       
        <div className="headerContainer">
        
       
       <ul className="liste">
            <li  style={{marginRight:'20px'}}>Acceuil</li>
            <li  style={{marginRight:'20px'}}>Nos services</li>
            <li  style={{marginRight:'20px'}}>Nos réalisations</li>
            <li  style={{marginRight:'20px'}}>Galerie Photos</li>
            <li  style={{marginRight:'20px'}}>Contacts</li>
            <li  style={{marginRight:'20px'}}>Avis Clients</li>
</ul>

        <button className="btn">ICI</button>

        <img className="logo" src={logo} alt="logo" />

        </div>
    )
  
 }
       
            
    
    

export default Header