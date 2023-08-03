 import { useState } from "react";

function Condicional() {

const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(setUserEmail)

    }
    function LimparEmail() {
        setUserEmail("")
    }

    return(
        <div>
            <h2>cadastre o seu email:</h2>
            <form>
                <input type="email" name="email" placeholder="Digite seu E-mail" onChange={ (e)=> setEmail(e.target.value) }/>
                <button type ="submit"  onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail &&(
                    <div>
                        <p>O e-mail do usuario é {userEmail}</p>
                    </div>
                )}
                <button type ="submit"  onClick={LimparEmail}>LimparEmail</button>
            </form>
        </div>
    )
}

export default Condicional