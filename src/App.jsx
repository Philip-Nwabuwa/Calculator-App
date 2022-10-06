import React, { useState } from 'react'
import "./App.css";
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';


const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ["+", "-", "/", "*", "."];

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

  return (
    <>
      <main className="flex flex-col h-full h-screen items-center text-4xl font-bold bg-[#3a4764]">
        <div className="flex flex-1 flex-col justify-center py-6 px-3 w-full max-w-lg">

          <header className="flex text-white items-center justify-between">
            <h1 className="text-white">Calculator</h1>
            <div className="flex items-end items-center text-sm text-uppercase gap-6">
              <h2>Theme</h2>
              <div className="flex flex-flow-column align-center gap-0.25em w[60px]">
                {/* icon to toogle switch */}
                <BsMoon />
                <BsSun />
              </div>
            </div>
          </header>

          <div id="Screen">
            <span className="text-right rounded-xl mt-3 cursor-text bg-[#182034] text-[#ffffff] inline-block w-full p-3 min-h-[2em]">
              {calc || 0} <br />
              {result || ""}
            </span>
          </div>

          <div>
            <div id="Keypad" className="btns w-full rounded-xl flex gap-3 sm:gap-4 justify-between bg-[#232c43] mt-3 p-4" >
              <button onClick={() => calcResult("7")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">7</button>
              <button onClick={() => calcResult("8")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">8</button>
              <button onClick={() => calcResult("9")} className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">9</button>
              <button onClick={() => calcResult("Del")} id="Delete_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Del</button>
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
              <button onClick={() => calcResult("Reset")} id="Reset_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Reset</button>


              <button onClick={() => calcResult("=")} id="Equal_btn" className="btn bg-[#d03f2f] cursor-pointer text-[#ffffff]" type="button">=</button>
            </div>
          </div>

        </div>

        <footer className="text-[16px] font-normal lowercase bg-[#182034] text-[#ffffff] p-2 w-full border-t-gray-300 z-10 h-[35px] flex justify-center items-center">
          <p>coded by <a className='text-[#d03f2f] cursor-pointer' href="https://github.com/Philip-Nwabuwa/Calculator-App" target="_blank" rel="noreferrer">Philip Nwabuwa</a>  for
            <a className='text-[#d03f2f] cursor-pointer' href="https://www.altschoolafrica.com/" target="_blank" rel="noreferrer"> Alt_School Africa</a>
            @2022</p>


        </footer>

      </main>
    </>
  );
}


export default App
