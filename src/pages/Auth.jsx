import { useState } from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'
import './Auth.css'

function Auth({ onVolver }) {
  // Guardamos qué pestaña está activa: 'login' o 'register'
  const [modo, setModo] = useState('login')

  return (
    <section className="auth">
      <div className="sol"></div>
      <div className="suelo">
        <div className="rejilla"></div>
        <div className="niebla"></div>
      </div>

      <div className="auth-contenedor">
        {/* Pestañas que cambian entre acceder y registrarse */}
        <div className="pestanas">
          <button
            type="button"
            className={modo === 'login' ? 'pestana pestana-activa' : 'pestana'}
            onClick={() => setModo('login')}
          >
            Accede
          </button>
          <button
            type="button"
            className={modo === 'register' ? 'pestana pestana-activa' : 'pestana'}
            onClick={() => setModo('register')}
          >
            Regístrate
          </button>
        </div>

        {/* Según la pestaña activa, mostramos un formulario u otro */}
        <div className="tarjeta">
          {modo === 'login' ? <Login /> : <Register />}

          <p className="pie">
            <button type="button" className="volver" onClick={onVolver}>
              Volver al inicio
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Auth