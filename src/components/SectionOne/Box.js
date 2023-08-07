import { BoxStyle, Figure, Titlebox, P , Hr, Conteudo  } from "./BoxStyle"
/* A parte de importe da imagem consegui fazer assim, importei ela aqui e aí só chamei a variável
correspondente em src da tag img. */
import passeioIcon from '../../img/produtos/passeio.png'

export function Box({titulo, paragrafo, image}){
  return(
    <>
      <BoxStyle>
        <Conteudo>
          <Figure>
            <img src={image} alt='Bicicleta' />
          </Figure>
            <Titlebox>{titulo}</Titlebox>
            <Hr/>                    
            <P>{paragrafo}</P>
          </Conteudo>
      </BoxStyle>
    </>
  )
}