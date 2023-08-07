import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { Container, Content, Row } from "./styles";

function App() {
  const [number, setNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  const handleAddNumber = (num) => {
    setNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(number));
      setNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(number);
      setNumber(String(sum));
      setOperation("");
    }
  };

  const handleSub = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(number));
      setNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(number);
      setNumber(String(sub));
      setOperation("");
    }
  };

  const handleDiv = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(number));
      setNumber("0");
      setOperation("/");
    } else {
      const sub = Number(firstNumber) / Number(number);
      setNumber(String(sub));
      setOperation("");
    }
  };

  const handleMult = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(number));
      setNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(number);
      setNumber(String(mult));
      setOperation("");
    }
  };

  const handleEqual = () => {
    if (firstNumber !== "0" && operation !== "" && number !== "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSub();
          break;
        case "/":
          handleDiv();
          break;
        case "*":
          handleMult();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={number} />
        <Row>
          <Button label="x" onClick={() => handleAddNumber("=")} />
          <Button label="/" onClick={handleDiv} />
          <Button label="c" onClick={() => handleOnClear()} />
          <Button label="*" onClick={handleMult} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSub} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEqual} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
