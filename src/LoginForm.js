import React from "react";
import './challenge.css'

export default function LoginForm () {
    const handelSubmit = event =>{
        event.preventDefault()
        alert(`BONJOUR ${event.target.elements.emailInput.value}`)
    }
    return (
        <div className="contenu"> 
        <form className="formulaire" onSubmit={handelSubmit}>
        <h2>Connecter vous</h2>
        <label className="lab">
            Adresse email:
            <input type='texte' name="emailInput" />
        </label>
       
       
        <label className="lab">
            Nom:
            <input type='texte' name="nameInput" />
        </label>
        <label className="lab">
            Prénom
            <input type='texte' name="firstNameInput" />
        </label>
        <label className="lab">
            Mot de passe
            <input type='texte' name="PasswordInput" />
        </label>
        <input type='submit' value="validé" className="valid" />
    </form>
</div>
    )       
}