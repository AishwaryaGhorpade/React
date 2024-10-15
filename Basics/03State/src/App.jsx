import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Components/Message'
import MessFun from './Components/MessFun'
import Counting from './Components/Counting'

function App() {

  return (
    <>
      {/* class component */}
      <Message></Message> 
      <Counting/>

       {/*Function component  */}
       <MessFun/>
    </>
  )
}

export default App
