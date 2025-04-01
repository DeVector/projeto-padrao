import styled from "styled-components";


export const Linha = styled.tr<{ estaEditando: boolean }>`
  background-color: ${(props) =>
    props.estaEditando ? '#ffff99' : 'transparent'}; /* Amarelo quando editando */
`

export const Imagen = styled.img `
  width: 40px;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
`

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`

export const EditArea = styled.input`
  width: 100%;
  padding: 4px;
`
