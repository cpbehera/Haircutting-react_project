import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav />
    <Login />
      
    </>
  )
}

export default App
