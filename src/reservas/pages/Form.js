
import { useState } from 'react'

function Form (){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadatro</h1>
            <form onSubmit = {cadastrarUsuario}>
                <div>
                    <label htmlFor ="name" className='nomelabel'>nome:</label>
                    <input type = "text" id ="name" name="name" placeholder = "email@gmial.com.br" onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password" className='senhalabel'>Senha: </label>
                    <input type = "password" id="password" name="password"placeholder = "senha" onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type = "submit" value ="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form