import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-between">
            <h1>Calculator</h1>
            <div className="flex items-end text-sm text-uppercase gap-6">
              <h2>Theme</h2>
              <div className="flex flex-flow-column align-center gap-0.25em w[60px]">
                {/* icon to toogle switch */}
                moon
              </div>
            </div>
          </header>
    )
}

export default Header