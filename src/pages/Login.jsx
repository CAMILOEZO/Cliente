import { useState } from 'react'

function Login() {
  // Un estado por cada campo
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviar(evento) {
    evento.preventDefault() // evita que la página se recargue

    // Leemos los usuarios guardados (o un array vacío si no hay ninguno)
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []

    // Buscamos un usuario con el mismo email y contraseña
    const usuario = usuariosGuardados.find(
      (u) => u.email === email && u.password === password
    )

    if (!usuario) {
      setMensaje('Email o contraseña incorrectos')
      return
    }

    setMensaje(`¡Bienvenido/a, ${usuario.nombre}!`)
    // En la app final aquí guardaríamos la sesión y navegaríamos al dashboard
  }

  return (
    <form onSubmit={enviar}>
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

      <button className="boton" type="submit">Acceder</button>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  )
}

export default Login