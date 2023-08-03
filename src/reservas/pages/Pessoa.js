function Pessoa({foto, nome, idade, profissao}){
    return(
        <div>
            <img src={foto} alt= {nome}/>
            <h1>Meu nome é: {nome}</h1>
            <p>Minha idade é: {idade}</p>
            <p>Minha profissão é: {profissao}</p>
        </div>
    )
}

export default Pessoa