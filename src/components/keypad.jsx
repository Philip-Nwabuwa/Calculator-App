import React from 'react'

const Keypad = () => {
    return (
        <div>
            <div id="Keypad" className="w-full flex gap-2 justify-between bg-gray-200 mt-3 p-4" >
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">Del</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">+</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">-</button>
            <button type="button">.</button>
            <button type="button">0</button>
            <button type="button">/</button>
            <button type="button">x</button>
            <button type="button">Reset</button>
            <button type="button">=</button>
          </div>
        </div>
    )
}

export default Keypad