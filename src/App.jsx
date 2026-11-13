import { useState } from 'react'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import './App.css'

function App() {
  const [pantalla, setPantalla] = useState('home')

  if (pantalla === 'register') {
    return <Register onVolver={() => setPantalla('home')} />
  }

  return <Home onRegister={() => setPantalla('register')} />
}

export default App
