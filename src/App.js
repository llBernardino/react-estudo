import './App.css';
import { Box } from './components/SectionOne/Box';
import { AppStyle } from './AppStyle';
import { Content } from './components/Content'
import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';
import { Bicicletas } from "./components/SectionTwo/Bicicletas";
import passeioIcon from './img/produtos/passeio.png'
import esporteIcon from './img/produtos/esporte.png'
import retroIcon from './img/produtos/retro.png'
function App() {
//const name = "Cauã"
//const newname = name.toUpperCase()

//function sum(a, b){
//return a + b
//}
 
//const url = "https://via.placeholder.com/150"
//const variavel = "Informação que vem da variavel"
//const meusItens = ["react", "vue", "angular",]
//const [nome, setNome] = useState()




  return (
   <AppStyle>     {/* body */}
    <SectionOne>
      <Content> {/* wrapper-1360 */}
        <Bicicletas h1={'BICILETAS FEITAS A MÃO'} bloqueote={'Willianmorris'} p={'“não tenha nada em sua casa que você não considere útil ou acredita ser bonito”'} button={'ORÇAMENTO'}/>
      </Content>      
    </SectionOne>
    <SectionTwo>
      <Content>
        <Box image={esporteIcon} titulo={"PASSEIO"} paragrafo={"Ainda assim, existem dúvidas a respeito de como a necessidade de renovação."}/>
      </Content>
      <Content>
        <Box image={passeioIcon} titulo={"PASSEIO"} paragrafo={"Ainda assim, existem dúvidas a respeito de como a necessidade de renovação."}/>
      </Content>
      <Content>
        <Box image={retroIcon} titulo={"PASSEIO"} paragrafo={"Ainda assim, existem dúvidas a respeito de como a necessidade de renovação."}/>
      </Content>
    </SectionTwo>
      
    






   </AppStyle>
    
  );
}

export default App;
