import React, { useState } from 'react';
import "./App.css";
import Footer from "./components/footer";

// react icons 
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';

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

    
  // dark theme
  const [dark, setDark] = React.useState(false);

  return (
    <main
      className={`flex flex-col h-full h-screen items-center text-4xl font-bold bg-[#ffffff] dark:bg-[#3a4764] ${
        dark && 'dark'
      }`}
    >
        <div className="flex flex-1 flex-col bg-[#e9ebf0] border-blue-200 dark:bg-[#3a4764] rounded-xl justify-center mt-3 py-6 px-3 w-full max-w-lg">

          <header className="flex dark:text-white text-[#182034] items-center justify-between">
      <h1 className="dark:text-white text-[#182034]">Calculator</h1>
      <div className="flex items-end items-center text-base text-uppercase gap-6">
        <h2>Theme</h2>
        <div className="flex flex-flow-column align-center gap-0.25em w[60px]">
         
          {/* icon to toogle switch */}
          <div className='cursor-pointer z-10 hover:shadow-lg' onClick={() => setDark(!dark)} >
            {dark ? <BsSunFill size={25} className='text-[#ffffff]' /> : <BsMoonFill size={25} className='text-[#000000]' />}
          </div>
        </div>
      </div>
    </header>

          <div id="Screen">
            <span id="display" className="text-right rounded-xl mt-3 cursor-text bg-[#182034] text-[#ffffff] inline-block w-full p-3 min-h-[2em]">
              {calc || 0} <br />
              {result || ""}
            </span>
          </div>

          <div>
            <div id="Keypad" className="btns w-full rounded-xl flex gap-3 sm:gap-4 justify-between bg-white dark:bg-[#232c43] mt-5 p-4" >
              <button onClick={() => calcResult("7")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer dark:text-[#444b5a] text-[#ffffff]" type="button">7</button>
              <button onClick={() => calcResult("8")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">8</button>
              <button onClick={() => calcResult("9")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">9</button>
              <button onClick={del} id="Delete_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Del</button>
              <button onClick={() => calcResult("4")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">4</button>
              <button onClick={() => calcResult("5")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">5</button>
              <button onClick={() => calcResult("6")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">6</button>
              <button onClick={() => calcResult("+")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">+</button>
              <button onClick={() => calcResult("1")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">1</button>
              <button onClick={() => calcResult("2")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">2</button>
              <button onClick={() => calcResult("3")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">3</button>
              <button onClick={() => calcResult("-")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">-</button>
              <button onClick={() => calcResult(".")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dar:text-[#444b5a]" type="button">.</button>
              <button onClick={() => calcResult("0")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">0</button>
              <button onClick={() => calcResult("/")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">/</button>
              <button onClick={() => calcResult("*")} className="btn dark:bg-[#eae3dc] bg-[#444b5a] cursor-pointer text-[#ffffff] dark:text-[#444b5a]" type="button">x</button>
              <button onClick={reset} id="Reset_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Reset</button>


              <button onClick={solution} id="Equal_btn" className="btn bg-[#d03f2f] cursor-pointer text-[#ffffff]" type="button">=</button>
            </div>
          </div>

        </div>

        <Footer />

      </main>
  );
}


export default App
