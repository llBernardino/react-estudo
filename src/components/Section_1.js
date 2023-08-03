import styled from '@emotion/styled'


const background = (p) => `url('${p.bgPath}'), lightgray 50% / cover no-repeat`

    export const Section_1 = styled.div`
        background-image: url("./img/bg.jpg");
        background-color:blue;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 380px ;
        display: flex;
        align-items: center;
    `
export default Section_1