import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setcounter]=useState(15);   //useState hook is used
  //it can be store in an array,It contains in 0th index var ,1th index function


  const addValue=()=>{
    console.log("Clicked",counter);
    counter=counter+1;
    setcounter(counter);
    //setcounter(counter+1);
  }
  const removeValue=()=>{
    if(counter==0)
    {
      setcounter(counter);
    }
    else{
    setcounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>add value to {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value from {counter}</button>
      </>
  )
}

export default App
