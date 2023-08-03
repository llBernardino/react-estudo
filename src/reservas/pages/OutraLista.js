function OutraLista ({itens}){
    return(
        <>
            <h3>Lista De Coisas Boa:</h3>
            {itens.length > 0 ?(
                itens.map((item) =>(
                    <p>{item}</p>
                ))) : (
                    <p>sem itens</p>
                )}
        </>
    )
}

export default OutraLista