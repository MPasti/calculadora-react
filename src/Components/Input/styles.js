import { styled } from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: #aaaaff;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;

  //aqui estmamos encadeando e criando o input dentro e já vai ficar estilizado dessa forma
  input {
    width: 100%;
    height: 85px;
    background-color: #aaaaff;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;

    font-size: 24px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    color: #fff;
  }
`;
