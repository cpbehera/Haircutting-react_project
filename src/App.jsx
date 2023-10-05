import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Login />
      <Footer />
    </>
  )
}

export default App
