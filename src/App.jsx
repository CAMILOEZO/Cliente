import { useState } from 'react'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import './App.css'

function App() {
  const [pantalla, setPantalla] = useState('home')

  if (pantalla === 'auth') {
    return <Auth onVolver={() => setPantalla('home')} />
  }

  return <Home onAuth={() => setPantalla('auth')} />
}

export default App
