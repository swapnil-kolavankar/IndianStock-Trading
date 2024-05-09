import './App.css'
import React from 'react'
import img1 from './image/bitfxxlogo_rgbwhite.png'

function App() {
  

  return (
    <>
      <header>
        <div className='logo-header'>
          <a><img src={img1} alt="Bitfxx Logo" /></a>
        </div>
        <div className='header-text'>ALPHA FX BOT</div>
      </header>
    </>
  )
}

export default App
