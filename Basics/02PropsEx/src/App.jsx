import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Hello'       //functional component
import Welcome from './Components/Welcome'   //functional component
import Greet from './Components/Greet'       //class component
import Parent from './Components/Parent'

function App() {

  return (
    <>
      <Hello name="Aish" age="23"/>
      <Hello name="Diya"/>
      <Hello age="3"/>
      <Welcome name="Nisha">
        <p>this is child</p>
      </Welcome>
      <Welcome name="Keerti">
        <button>action</button>
      </Welcome>
      <Welcome name="Riya"/>  
      {/* to access props in functional component use direct props name given (ex:name,props.name)  */}
      {/* to access props in class component use this keyword (ex:name,this.props.name) */}

      {/* In class component */}
      <Greet username="aish@123"/>

      {/* method used ad props */}
      <Parent/>
    </>
  )
}

export default App
