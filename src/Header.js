import React,{useState,useEffect} from "react";
import './challenge.css'
import logo from './LOGO.png'

 function Header() {
    
   const [toggleMenu, setToggleMenu] = useState(true);
   const [largeur, setLargeur] = useState(window.innerWidth)
   const toggleSmallScreen = () => {
       setToggleMenu(!toggleMenu);
   }
   useEffect(() =>{
       const changeWidth =()=>{
           setLargeur(window.innerWidth);

           if(window.innerWidth >600){
               setToggleMenu(false)
           }

       }
        window.addEventListener('resize', changeWidth);
        return()=>{
            window.removeEventListener('resize', changeWidth);
        }
   },[])

    return (
       <nav>
 

{(toggleMenu || largeur > 500) && (
    <div className="headerContainer">
    <img className="logo" src={logo} alt="logo" />
        <ul className="liste">
           
            <li  style={{marginRight:'20px'}}>Acceuil</li>
            <li  style={{marginRight:'20px'}}>Nos services</li>
            <li  style={{marginRight:'20px'}}>Nos réalisations</li>
            <li  style={{marginRight:'20px'}}>Galerie Photos</li>
            <li  style={{marginRight:'20px'}}>Contacts</li>
            <li  style={{marginRight:'20px'}}>Avis Clients</li>

        </ul>
    </div>

        )}
        
    <button onClick={ toggleSmallScreen} className="btn">ICI</button>

        </nav>
    )
  
 }
      
       
       
       
            
    
    

export default Header