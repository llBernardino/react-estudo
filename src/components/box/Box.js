import {BoxStyle, Article, Titlebox, Figure, Infos, P} from "./BoxStyle"

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