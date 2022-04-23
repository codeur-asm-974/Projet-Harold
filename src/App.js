
import React from "react";
import Header from "./Header";
import Paragraphe from "./Paragraphe";
import './challenge.css'
import reunion from './reunion.jpg'
import LoginForm from "./LoginForm";

import Footer from "./Footer";



function App() {
  return (
    <div className="App">
   
      <Header /> 
      <img className="reunion" src={reunion} alt="reunion"  />
        
            <Paragraphe className="paraContainer" >Création de supports de communications,Logo...</Paragraphe>
            <Paragraphe className="paraContainer" >Prise de vue Photo-Vidéo</Paragraphe>
            <Paragraphe className="paraContainer" >Transfert cassette VHS vers clés USB</Paragraphe>
            <Paragraphe className="paraContainer">Restauration de photo ancienne</Paragraphe>
            <Paragraphe className="paraContainer">Et encore bien d autres choses à decouvrir.....</Paragraphe>
 
      <LoginForm />
      <Footer />
    </div>
  
  );
}

export default App;
