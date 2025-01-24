import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './Components/PostList'
import PostForm from './Components/PostForm'

function App() {
  return (
    // <PostList/>  //using GET method
    <PostForm/>    //using POST method
  )
}

export default App
