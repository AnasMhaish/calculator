import React, { useState } from "react";
import "./Calculator.css";

const OPERATORS = ["+", "-", "*", "/"];

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState("0");
  const [expressionEvaluated, setExpressionEvaluated] = useState(false);

  const handleButtonClick = (value: string) => {
    console.log(value);
    if (expression === "0") {
      if (value === ".")
        setExpression((prevExpression) => prevExpression + value);
      else setExpression(value);
      return;
    }

    if (expressionEvaluated && !OPERATORS.includes(value)) {
      setExpression(value);
      setExpressionEvaluated(false);
      return;
    }
    else
        setExpressionEvaluated(false);

    if (
      value === "." &&
      expression
        .split(/[+\-*/]/)
        .pop()
        ?.includes(".")
    ) {
      return;
    }
    if (value === "." && !/\d$/.test(expression)) {
      return;
    }
    if (value === "0" && expression === "0") {
      return;
    }

    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      console.log("=");
      const result = eval(expression);
      setExpression(result.toString());
      setExpressionEvaluated(true);
    } catch (error) {
      console.error(expression);
      setExpression("Error");
      setExpressionEvaluated(false);
    }
  };

  const handleClear = () => {
    setExpression("0");
    setExpressionEvaluated(false);
  };

  return (
    <div className="center-container">
      <input
        id="display"
        type="text"
        value={expression}
        readOnly
        className="row"
      />
      <div className="row">
        <button id="seven" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button id="multiply" onClick={() => handleButtonClick("*")}>
          *
        </button>
      </div>
      <div className="row">
        <button id="four" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button id="subtract" onClick={() => handleButtonClick("-")}>
          -
        </button>
      </div>
      <div className="row">
        <button id="one" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button id="add" onClick={() => handleButtonClick("+")}>
          +
        </button>
      </div>
      <div className="row">
        <button id="zero" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button id="decimal" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button id="equals" onClick={() => handleCalculate()}>
          =
        </button>
        <button id="divide" onClick={() => handleButtonClick("/")}>
          /
        </button>
      </div>
      <div>
        <button id="clear" onClick={() => handleClear()}>
          AC
        </button>
      </div>
    </div>
  );
};

export default Calculator;
