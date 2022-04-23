import React from "react";
import './challenge.css'
import facebook from './logo-facebook.png'
import instagram from './instagram.png'
import email from './email.png'

 function Footer() {
    return (
       
            <div className="footerContainer">
            <ul className="foot" >
                <li  style={{marginRight:'20px', color:'blue'}}><img className="Facebook" src={facebook} alt="logo" /></li>
                <li  style={{marginRight:'20px', color:'blue'}}><img className="instagram" src={instagram} alt="logo" /></li>
                <li  style={{marginRight:'20px', color:'blue'}}><img className="email" src={email} alt="logo" /></li>
               
               
            </ul>
            
            </div>
       
       
    )
}
export default Footer