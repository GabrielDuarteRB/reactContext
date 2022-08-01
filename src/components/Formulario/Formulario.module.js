import styled from "styled-components";

export const Campos = styled.div `
    align-items: flex-start ;
    border: 1px solid #DFE0EB;
    border-radius: 8px; 
    background-color: white ;
    display: flex ;
    flex-direction: column ;
    padding:40px;
    & button {
        margin-top: 16px;
    }
    & button:first-child{
        margin-right: 8px
    }
`

export const Formulario = styled.form `
    align-items: center;
    background-color: #363740;
    display: flex ;
    height: 100vh;
    justify-content: center ;

`