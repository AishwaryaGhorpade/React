import { useState } from 'react'
import './App.css'
import UseStateHook from './Components/UseStateHook'
import UseStateWithObj from './Components/UseStateWithObj'
import UseStateWithArray from './Components/UseStateWithArray'

function App() {
  return (
    <>
      {/* <UseStateHook/> */}   {/*counter Example using UseState HOOK */}
      {/* <UseStateWithObj/> */}    {/* UseState HOOK using Object*/}
      <UseStateWithArray/>
    </>
  )
}

export default App
