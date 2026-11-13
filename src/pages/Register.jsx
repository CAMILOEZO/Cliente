import { useState } from 'react'
import './Register.css'

function Register({ onVolver }) {
  // Un estado por cada campo
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetir, setRepetir] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviar(evento) {
    evento.preventDefault() // evita que la página se recargue

    if (password.length < 8) {
      setMensaje('La contraseña debe tener al menos 8 caracteres')
      return
    }

    if (password !== repetir) {
      setMensaje('Las contraseñas no coinciden')
      return
    }

    // Leemos los usuarios guardados (o un array vacío si no hay ninguno)
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []

    // Comprobamos que el email ya no esté registrado
    const existe = usuariosGuardados.some((usuario) => usuario.email === email)

    if (existe) {
      setMensaje('Ese email ya está registrado')
      return
    }

    // Añadimos el nuevo usuario al array
    usuariosGuardados.push({ nombre, email, password })

    // Guardamos el array convertido a texto en el navegador
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))

    setMensaje('¡Cuenta creada correctamente!')
    // En la app final la contraseña iría al backend
  }

  return (
    <section className="registro">
      <div className="sol"></div>

      <div className="suelo">
        <div className="rejilla"></div>
        <div className="niebla"></div>
      </div>

      <form className="tarjeta" onSubmit={enviar}>
        <h1>Crear cuenta</h1>
        <p className="subtitulo">Únete a Verdant Grid</p>

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="repetir">Repetir contraseña</label>
        <input
          id="repetir"
          type="password"
          value={repetir}
          onChange={(e) => setRepetir(e.target.value)}
          required
        />

        <button className="boton" type="submit">Registrarme</button>

        {mensaje && <p className="mensaje">{mensaje}</p>}

        <p className="pie">
          <button type="button" className="enlace" onClick={onVolver}>
            Volver al inicio
          </button>
        </p>
      </form>
    </section>
  )
}

export default Register
