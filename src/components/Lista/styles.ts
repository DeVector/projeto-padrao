import styled from "styled-components";

export const Tabale = styled.table`
  border-collapse: collapse; //Feito para que toda linha fique na mesma cor
  margin-top: 16px;
  margin-left: 12px;
  padding: 24px 16px;
  width: 1300px;
  background-color: #cff2ff;

  th {
    padding: 8px;
  }
  td{
    text-align: center;
  }

  thead {
    background-color: #FFCFD0;
  }

  tbody > tr:nth-of-type(even) {
    background-color: #FFCFD0;
  }
`

export const Imagen = styled.img `
  width: 40px;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
`
