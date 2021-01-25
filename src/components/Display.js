import { useState } from "react";
import { TiBackspaceOutline } from "react-icons/ti";
import Button from "./Button";

const Display = () => {
  const [preValue, setPreValue] = useState();
  const [nextValue, setNextValue] = useState("0");
  const [operation, setOperation] = useState();

  const setNumber = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const clearOperation = () => {
    setPreValue();
    setOperation();
    setNextValue("0");
  };

  const backspace = () => {
    setNextValue(nextValue.length <= 1 ? "0" : nextValue.slice(0, -1));
  };

  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (preValue && nextValue === "") {
      setPreValue(parseFloat(preValue) / 100);
    }
  };

  const positiveNegative = () => {
    setNextValue(nextValue * -1);
  };

  const decimalPoint = () => {
    if (!String(nextValue).includes(".")) {
      setNextValue(nextValue + ".");
    }
  };

  const setOperator = (value) => {
    setNextValue("0");
    setOperation(value);
    setPreValue(nextValue);
  };

  const Operation = {
    "÷": (firstValue, secondValue) => firstValue / secondValue,
    X: (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
  };

  const performOperation = () => {
    if (!preValue) {
      alert("Insert Value");
    } else {
      let number = Operation[operation](
        parseFloat(preValue),
        parseFloat(nextValue)
      );
      setOperation();
      setNextValue(String(number));
      setPreValue();
    }
  };

  return (
    <div>
      <div className="display">{nextValue}</div>
      <div className="container">
        <div className="item">
          <Button color={"#3498db"} keyValue={"C"} onClick={clearOperation} />
        </div>
        <div className="item">
          <Button
            color={"#3498db"}
            keyValue={"\xB1"}
            onClick={positiveNegative}
          />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"%"} onClick={percentage} />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"÷"} onClick={setOperator} />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <Button keyValue={7} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={8} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={9} onClick={setNumber} />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"X"} onClick={setOperator} />
        </div>
      </div>

      <div className="container">
        <div className="item">
          <Button keyValue={4} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={5} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={6} onClick={setNumber} />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"-"} onClick={setOperator} />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <Button keyValue={1} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={2} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={3} onClick={setNumber} />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"+"} onClick={setOperator} />
        </div>
      </div>

      <div className="container">
        <div className="item">
          <Button keyValue={0} onClick={setNumber} />
        </div>
        <div className="item">
          <Button keyValue={"."} onClick={decimalPoint} />
        </div>
        <div className="item">
          <Button color={"#3498db"} keyValue={"="} onClick={performOperation} />
        </div>
        <div className="item">
          <Button
            color={"#3498db"}
            keyValue={<TiBackspaceOutline />}
            onClick={backspace}
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
