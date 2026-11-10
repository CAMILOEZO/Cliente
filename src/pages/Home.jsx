import './Home.css'

const colores = ['#39FF88', '#FFC93C', '#070D0A']

function Home() {
  return (
    <section className="hero">
      <div className="sol"></div>

      <div className="contenido">
        <h1 className="titulo">Verdant Grid</h1>
        <p className="texto">
          Cyber-Solarpunk para la monitorización energética del hogar: la
          precisión del neón al servicio de un futuro verde.
        </p>
        <ul className="lista">
          {colores.map((color) => (
            <li key={color} className="chip">
              {color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home
