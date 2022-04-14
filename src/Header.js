import React from "react";
import './challenge.css'
import './bannier-facebook.jpeg'

 function Header() {
    
   

    return (
       
        <div className="headerContainer">
        <img className="baniere" src="./bannier-facebook.jpeg" alt="baniere" />
       
       <ul className="liste">
            <li  style={{marginRight:'20px'}}>Acceuil</li>
            <li  style={{marginRight:'20px'}}>Nos services</li>
            <li  style={{marginRight:'20px'}}>Nos réalisations</li>
            <li  style={{marginRight:'20px'}}>Galerie Photos</li>
            <li  style={{marginRight:'20px'}}>Contacts</li>
            <li  style={{marginRight:'20px'}}>Avis Clients</li>
</ul>

        <button className="btn">ICI</button>

        </div>
    )
  
 }
       
            
    
    

export default Header