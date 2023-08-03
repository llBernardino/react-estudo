import BoxStyle from "./BoxStyle"
import Article from "./Article"
import Titlebox from "./Titlebox"
import Figure from "./Figure"
import Infos from "./Infos"
import P from "./P"
function Box(){
    return(
        <>
            <Article>
                <BoxStyle>
                    <Figure><img src="/passeio.png"/></Figure>
                    <Infos>
                        <Titlebox>PASSEIO</Titlebox>                    
                        <P>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</P>
                    </Infos>
                </BoxStyle>
            </Article>
        </>
    
    )

}

export default Box 