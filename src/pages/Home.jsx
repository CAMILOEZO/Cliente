import './Home.css'
import Buttons from '../components/Buttons.jsx'

function Home() {
  return (
    <section className="hero">
      <div className="sol"></div>

      <div className="suelo">
        <div className="rejilla"></div>
          <div className="niebla"></div>
      </div>

      <div className="contenido">
        <h1 className="titulo">Verdant Grid</h1>
        <p className="texto">
          Cyber-Solarpunk para la monitorización energética del hogar: la
          precisión del neón al servicio de un futuro verde.
        </p>
        <Buttons />
      </div>
    </section>
  )
}

export default Home
