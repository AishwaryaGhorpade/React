import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="Riya" btnText="click me"/>
      <Card username="Yash"/>
      <Card username="Diya" btnText="visit me"/>
    </>
  )
}

export default App
