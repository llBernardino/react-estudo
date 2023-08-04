import styled from '@emotion/styled'
/*E aqui importei do mesmo jeito, criei a variável, aí coloquei o caminho da imagem e chamei ela dentro de url */
import bgImage from '../img/bg.jpg'

export const SectionOne = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 23.75rem ;
  display: flex;
  align-items: center;
  
  
`