import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(value) {
    setInputNumber(value);
  }

  function handleSubmit() {
    const originalNumber = parseInt(inputNumber.replace(".", ""), 10);
    const reversedNumber = parseInt(
      inputNumber.split("").reverse().join("").replace(".", ""),
      10,
    );

    setResult(Math.abs(originalNumber - reversedNumber));
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input type="number" onChange={(e) => handleInput(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
