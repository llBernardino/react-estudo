function SeuNome ({setNome}){
    return(
        <div>
          <input type="text" placeholder="Digite Seu Nome" onChange={(e) => setNome(e.target.value)}/>  
        </div>
    )
}

export default SeuNome