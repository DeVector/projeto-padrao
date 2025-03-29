import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Titulo = styled.h1`
  font-weight: bold;
  text-align: center;
`

export default EstiloGlobal;
