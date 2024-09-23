import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);  //setCounter is a function
  // let counter=5;
  const addValueFun=()=>{
    console.log("clicked",counter);
    // setCounter(counter+1);
    counter=counter+1;
    setCounter(counter);
  }
  const removeVlaueFun=()=>{
    console.log("clicked",counter);
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Chai aur React</h1>
    counter={counter};
    <br/>
    <button onClick={addValueFun}>AddValue to {counter}</button>
    <br/>
    <button onClick={removeVlaueFun}>RemoveValue from {counter}</button>
    </>
  )
}

export default App
