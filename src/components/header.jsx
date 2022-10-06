import React from 'react'
import { BsMoon } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';

const Header = () => {
    return (
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
    )
}

export default Header