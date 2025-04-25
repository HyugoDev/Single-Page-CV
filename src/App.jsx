
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className="hoja">
        <hr class="linea-horizontal" />
        {/* Info */}
        <section className="hoja__section">
          <h1>Hugo Gerardo Mejias Ugalde</h1>
          <h2>Junior Full Stack Developer</h2>
          <p className="text">
            Miramar, Puntarenas, Costa Rica<br />
            (506) 8710-0664 <br />
            hyugodev@gmail.com<br />
          </p>
        </section >
        {/* Skills */}
        <section className="hoja__section">
          <h2>Skills</h2>
          <p className="text">
            HTML, CSS, JavaScript, React, Git, Express, Java, MySQL, PostgreSQL, Tailwind CSS
          </p>
        </section >
        {/* Education */}
        <section className="hoja__section">
          <h2>Education</h2>
          <h3>Universidad Estatal a Distancia, Puntarenas - Diplomado</h3>
          <p className="text">
            Enero 2020 to Septiembre 2023<br />
            Diplomado en Ingenieria Informatica
          </p>
          <h3>Universidad Estatal a Distancia, Puntarenas - Bachillerato</h3>
          <p className="text">
            Enero 2023 to Agosto 2025<br />
            Bachillerato en Ingenieria Informatica
          </p>
        </section >
        {/* Experience */}
        <section className="hoja__section">
          <h2>Experience</h2>
          <h3>Municipalidad Montes de Oro, Miramar - Developer</h3>
          <p className="text">
            Enero 2024 to Noviembre 2024<br />
            <ul>
              <li>Desarrollo de una aplicación web para la gestión de Retenciones a Proveedores.</li>
              <li>Implementación de una API RESTful para la gestión de datos.</li>
              <li>Colaboración en un equipo de Contabilidad para el desarrollo de software.</li>
            </ul>
            Skills: JavaScript, React, Nextjs, Express, MySQL, Tailwind CSS
          </p>
        </section >
        {/* Link */}
        <section className="hoja__section">
          <h2>Across the Internet</h2>
          <p className="text">
            <a href="https://www.linkedin.com/in/huguitodev/" target="_blank">LinkedIn</a><br />
            <a href="https://github.com/HyugoDev" target="_blank">GitHub</a><br />
          </p>
        </section >
      </div>
    </div>
  )
}

export default App
