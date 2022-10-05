import React from 'react'
import "./App.css";
import Keypad from "./components/keypad.jsx"
import Footer from "./components/footer.jsx"
import Screen from "./components/screen.jsx"
import Header from "./components/header.jsx"

const App = () => {
  return (
    <>
      <main className="flex flex-col h-full items-center text-4xl font-bold">
        <div className="flex flex-1 flex-col justify-center py-6 px-3 w-full max-w-lg">

          <Header />

          <Screen/>

          <Keypad />

          <Footer />

        </div>
      </main>
    </>
  );
}

export default App
