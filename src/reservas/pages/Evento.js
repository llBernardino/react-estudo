import Button from "./evento/Button.js"

function Evento(){

    function meuEvento(){
        console.log("opa toma milreais ai em dogecoin")
    }
 

    return(
        <div>
            <p>Clique aqui e ganhe 1milhao de reais na blaze</p>
            <Button event ={meuEvento} text ="clique aqui e ganhe um doritos sabor cebola"/>
            {/* <button onClick = {meuEvento} >ATIVAR!</button> */}
        </div>

    )
}
export default Evento