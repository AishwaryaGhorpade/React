import './App.css'
import ErrorThrow from './Components/ErrorThrow'
import FocusInput from './Components/FocusInput'
import ParentCompo from './Components/ParentCompo'
import Refs from './Components/Refs'

function App() {

  return (
    <>
      {/* <ParentCompo/> */}
      <Refs/>
      <FocusInput/>
      <ErrorThrow/>
    </>
  )
}

export default App
