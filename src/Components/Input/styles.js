import { styled } from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: #ffaaaa;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  //aqui estmamos encadeando e criando o input dentro e já vai ficar estilizado dessa forma
  input {
    width: 100%;
    height: 85px;
    background-color: #ffaaaa;
    border: 0;
    align-items: right; //já que o pai é flex
  }
`;
