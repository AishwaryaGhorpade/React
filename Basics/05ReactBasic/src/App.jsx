import './App.css'
import ButtonClicked from './Components/ButtonClicked'
import ContextA from './Components/ContextA'
import ErrorThrow from './Components/ErrorThrow'
import FocusInput from './Components/FocusInput'
import HoverCounter from './Components/HoverCounter'
import ParentCompo from './Components/ParentCompo'
import Refs from './Components/Refs'
import { UserProvider } from './Components/UserContext'

function App() {

  return (
    <>
      {/* <ParentCompo/> 
      <Refs/>
      <FocusInput/>
      <ErrorThrow/> */}

      {/* higher order Component(HOC) -A pattern where function takes component as agrument return a NewComponents*/}
      {/* const newComponent=HOC(originalComponent) */}
      {/*why: HOC used?  -> to share common functionaly between components  */}
      {/* <ButtonClicked/>
      <HoverCounter name={"Aish"}/> */}

       {/* context */}
       {/* context-> Context provides a way to pass through the component tree without having to pass down manually at every level */}
        <UserProvider value="Aish">
        <ContextA />
        </UserProvider>
         <ContextA />   {/*default value takes(riya) */}
    </>
  )
}

export default App
