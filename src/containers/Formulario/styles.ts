import { styled } from "styled-components";

export const Form = styled.form`
  margin-top: 24px;
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`;

export const Campo = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  border-style: none;
  color: #666;
  background-color: #FFCFD0;
  font-weight: bold;
  width: 100%;
`

export const MainContainer = styled.main`
  margin-top: 16px;
  padding: 0 40px;
  height: 99vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
