import React from 'react'

const Footer = () => {
  return (
    <footer className="text-[16px] font-normal bg-[#182034] text-[#ffffff] p-2 w-full z-10 border-t-gray-300 h-[40px] flex justify-center items-center mt-3">
      <p>Coded by <a className='text-[#d03f2f] cursor-pointer' href="https://github.com/Philip-Nwabuwa/Calculator-App" target="_blank" rel="noreferrer">Philip <span className="sm:inline hidden">Nwabuwa</span></a>  for
        <a className='text-[#d03f2f] cursor-pointer' href="https://www.altschoolafrica.com/" target="_blank" rel="noreferrer"> Alt_School Africa </a>
        @2022</p>
    </footer>
  )
}

export default Footer