import {BicicletasStyle, Article, H1, Hr, P, Bloqueote, Button,Cite} from "./BicicletasStyle"


export function Bicicletas({h1, p, bloqueote, button}){
  return(
    <BicicletasStyle>
        <Article> 
            <H1>{h1}</H1>
            <Cite>
                <Hr/>
                <P>{p}</P>
                <Hr/>
                <Bloqueote>{bloqueote}</Bloqueote>
            </Cite>
            <Button>{button}</Button>
        </Article>
    </BicicletasStyle>
  )
}
export default Bicicletas