import { useState } from "react";
import "./styles.css";

export default function App() {
  var [date, setDate] = useState();
  var [result, setResult] = useState("give inputs to check result.");
  var [luckyNo, setLuckyNo] = useState();

  const getdate = function (e) {
    setDate(e.target.value);
  };

  const getLuckyNo = function (e) {
    setLuckyNo(e.target.value);
  };

  const calculateSum = function (date) {
    let sum = 0;
    date = date.replaceAll("-", "");
    for (let digit of date) {
      sum = sum + Number(digit);
    }
    return sum;
  };

  const checkIsNumberLucky = function () {
    if (!luckyNo || luckyNo <= 0 || !date) {
      return setResult("please give proper inputs.");
    }
    let sumOfDate = calculateSum(date);
    if (sumOfDate % luckyNo === 0) {
      setResult(`${luckyNo} is a lucky number.`);
    } else {
      setResult(`${luckyNo} is not a lucky number.`);
    }
  };

  return (
    <div className="App">
      <h1 className="header">Is your Birthday Lucky?</h1>
      <main class="container">
        <label for="date-of-birth">Date Of Birth:</label>
        <input type="date" id="date-of-birth" onChange={getdate} />
        <label for="lucky-number">Lucky Number:</label>
        <input
          type="number"
          id="lucky-number"
          placeholder="Enter a number"
          onChange={getLuckyNo}
        />
        <button id="calculate-number" onClick={checkIsNumberLucky}>
          Check Result
        </button>
        <h2 id="output-container">Result: {result}</h2>
      </main>
      <strong>
        <p>Privacy notice: We are not storing any user data.</p>
      </strong>
    </div>
  );
}
