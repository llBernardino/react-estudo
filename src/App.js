import './App.css';
import styled from '@emotion/styled'
import Buttonn from './components/Buttonn';
import Box from './components/box/Box';
import BoxStyled from './components/box/BoxStyle';
import AppStyle from './AppStyle';
import Content from './components/Content'
import Section_1 from './components/Section_1'


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

    <Section_1>

      <Content> {/* wrapper-1360 */}
        <Box/> 
      </Content>


    </Section_1>






   </AppStyle>
    
  );
}

export default App;
