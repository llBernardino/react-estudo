import {  Hr, Conteiner,Title } from "./TitleStyle"
/* A parte de importe da imagem consegui fazer assim, importei ela aqui e aí só chamei a variável
correspondente em src da tag img. */
import passeioIcon from '../../img/produtos/passeio.png'

export function TituloProdutos({titulo}){
  return(
    <>
      <Conteiner>
        <Title>{titulo}</Title>
        <Hr/>                    
      </Conteiner>
    </>
  )
}