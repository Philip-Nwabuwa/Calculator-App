import { useState } from 'react'
import "./App.css";
import Footer from "./components/footer"
import Header from "./components/header"
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';


const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ["+", "-", "/", "*", "."];
  const resetNum = [""];

  const calcResult = value => {
    if (
      operators.includes(value) && calc === "" ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const solution = () => {
    setCalc(eval(calc).toString()), setResult(resetNum);
  }

  const del = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const reset = () => {
    setCalc(resetNum),
    setResult(resetNum);
  }


  return (
    <>
      <main className="flex flex-col h-full h-screen items-center text-4xl font-bold bg-[#3a4764]">
        <div className="flex flex-1 flex-col justify-center py-6 px-3 w-full max-w-lg">

          <Header />

          <div id="Screen">
            <span id="display" className="text-right rounded-xl mt-3 cursor-text bg-[#182034] text-[#ffffff] inline-block w-full p-3 min-h-[2em]">
              {calc || 0} <br />
              {result || ""}
            </span>
          </div>

          <div>
            <div id="Keypad" className="btns w-full rounded-xl flex gap-3 sm:gap-4 justify-between bg-[#232c43] mt-3 p-4" >
              <button onClick={() => calcResult("7")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">7</button>
              <button onClick={() => calcResult("8")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">8</button>
              <button onClick={() => calcResult("9")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">9</button>
              <button onClick={del} id="Delete_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Del</button>
              <button onClick={() => calcResult("4")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">4</button>
              <button onClick={() => calcResult("5")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">5</button>
              <button onClick={() => calcResult("6")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">6</button>
              <button onClick={() => calcResult("+")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">+</button>
              <button onClick={() => calcResult("1")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">1</button>
              <button onClick={() => calcResult("2")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">2</button>
              <button onClick={() => calcResult("3")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">3</button>
              <button onClick={() => calcResult("-")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">-</button>
              <button onClick={() => calcResult(".")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">.</button>
              <button onClick={() => calcResult("0")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">0</button>
              <button onClick={() => calcResult("/")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">/</button>
              <button onClick={() => calcResult("*")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">x</button>
              <button onClick={reset} id="Reset_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Reset</button>


              <button onClick={solution} id="Equal_btn" className="btn bg-[#d03f2f] cursor-pointer text-[#ffffff]" type="button">=</button>
            </div>
          </div>

        </div>

        <Footer />

      </main>
    </>
  );
}


export default App
