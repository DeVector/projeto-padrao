import { IMaskInput } from "react-imask";
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

export const MaskedInput = styled(IMaskInput)`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border-style: none;
  background-color: lightsteelblue;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`

export default EstiloGlobal;
