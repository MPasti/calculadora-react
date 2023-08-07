import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, Row } from "./styles";

function App() {
  const [number, setNumber] = useState("0");

  const handleAddNumber = (number) => {
    setNumber((prev) => `${number}${prev}`);
  };
  return (
    <Container>
      <Content>
        <Input value={number} />
        <Row>
          <Button label="x" />
          <Button label="/" />
          <Button label="C" />
          <Button label="X" />
        </Row>
        <Row>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="x" />
        </Row>
        <Row>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="+" />
        </Row>
        <Row>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="-" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
