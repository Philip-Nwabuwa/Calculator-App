import React from 'react'


const Keypad = () => {
  return (
    <div>
      <div id="Keypad" className="btns w-full rounded-xl flex gap-3 sm:gap-4 justify-between bg-[#232c43] mt-3 p-4" >
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">7</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">8</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">9</button>
        <button id="Delete_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Del</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">4</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">5</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">6</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">+</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">1</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">2</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">3</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">-</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">.</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">0</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">/</button>
        <button className="btn bg-[#eae3dc] cursor-pointer text-[#444b5a]" type="button">x</button>
        <button id="Reset_btn" className="btn bg-[#637097] cursor-pointer text-[#ffffff]" type="button">Reset</button>
        <button id="Equal_btn" className="btn bg-[#d03f2f] cursor-pointer text-[#ffffff]" type="button">=</button>
      </div>
    </div>
  )
}

export default Keypad