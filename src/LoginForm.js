import React, {useState}from "react";
import './challenge.css'

export default function LoginForm () {
   
  
    
    const [ email,setEmail] = useState('')
   
    const handleChange = event =>{
       
        setEmail(event.target.value)
        
    }
    
    const handelSubmit = event =>{
        event.preventDefault()
        alert(`Votre formulaire a bien été envoyer`)
    }
    return (
        <div className="contenu"> 
        <form className="formulaire" onSubmit={handelSubmit}>
        <h2>Demandez votre devis</h2>
        
       <label className="lab">
            Nom:
            <input type='texte' name="nameInput"  />
        </label>
        <label className="lab">
            Prénom:
            <input type='texte' name="firstnameInput" />
        </label>
        <label className="lab">
            Adresse email:
            <input type='texte' name="emailInput" value={email} onChange={handleChange} />
        </label>
        <label className="lab">
            Téléphone:
            <input type='texte' name="phoneInput" />
        </label>
       
        <input type='submit' value="validé" className="valid" />
        <p className="condition1">En soumettant ce formulaire, j’accepte que mes informations soient utilisées exclusivement dans le cadre de ma demande et de la relation commerciale éthique et personnalisée qui pourrait en découler si je le souhaite.</p>
    </form>
</div>
    )       
}