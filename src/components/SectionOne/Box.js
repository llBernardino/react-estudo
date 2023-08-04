import { BoxStyle, Article, Figure, Infos, Titlebox, P ,  } from "./BoxStyle"
/* A parte de importe da imagem consegui fazer assim, importei ela aqui e aí só chamei a variável
correspondente em src da tag img. */
import passeioIcon from '../../img/produtos/passeio.png'

export function Box({titulo, paragrafo, image}){
  return(
    <>
      <Article>
        {/* Sugestão: criar um componente chamado BoxStyle ou somente Box ou 
        algo que remeta a box com as informações, pq como vc pode ver, ficar repetindo isso tudo
        de código, não é muito bom. Coloquei pra repetir só pra vc ter uma ideia tá. */}
        <BoxStyle>
          <Figure>
            <img src={image} alt='Bicicleta' />
          </Figure>
          <Infos>
            <Titlebox>{titulo}</Titlebox>                    
            <P>{paragrafo}</P>
          </Infos>
        </BoxStyle>
      </Article>
    </>
  )
}