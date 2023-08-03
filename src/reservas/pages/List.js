 import Item from './Item'

function List (){
    return(
        <>
            <h1>minha lista</h1>
            <ul>
               <Item marca= "ferrari" lancamento = {1990}/>
               <Item marca= "fiat" lancamento = {1990}/>
               <Item marca= "Troller" lancamento = {1990}/>
            </ul>
        </>
    )
}

export default List