import React from "react";
import'./challenge.css'
import LoginForm from "./LoginForm";


const Modale = ({revele , cache}) => revele?(

    <React.Fragment>
    
<div>
<button type="button" className="close" onClick={cache}>
            &times;
            </button>   
</div>
           
            <LoginForm />
        
    
        
    </React.Fragment>
):null
export default Modale