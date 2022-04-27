
import React from "react";
import Header from "./Header";
import Paragraphe from "./Paragraphe";
import './challenge.css'
import bureau from './bureau.jpeg'
import photo from './photo.png'

import Footer from "./Footer";
import LogiqueModale from "./LogiqueModale" ;
import Modale from "./Modale"


function App() {
  const {revele,toggle} = LogiqueModale();
  return (
    <div className="App">
   
      <Header /> 
      <img className="reunion" src={bureau} alt="reunion"  />
     
      <img className="photo" src={photo} alt="reunion"  />
     
        
            <Paragraphe className="paraContainer" >Création de supports de communications,Logo...</Paragraphe>
            <Paragraphe className="paraContainer" >Prise de vue Photo-Vidéo</Paragraphe>
            <Paragraphe className="paraContainer" >Transfert cassette VHS vers clés USB</Paragraphe>
            <Paragraphe className="paraContainer">Restauration de photo ancienne</Paragraphe>
            <Paragraphe className="paraContainer">Et encore bien d autres choses à decouvrir.....</Paragraphe>
        <div className='close'>
        <button className='button' type="texte" onClick={toggle}><p className="p1">Votres devis ici gratuit</p></button>
            <Modale
            revele={revele} 
            cache={toggle}
            />
        </div>
           
      
      <Footer />
    </div>
  
  );
}

export default App;
