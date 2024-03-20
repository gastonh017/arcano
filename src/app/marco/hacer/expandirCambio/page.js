import TablaExpandirCambio from './tablaExpandirCambio'
import style from '../page.module.css'

export default function ExpandirCambio() {
  return (
    <main className={style.stagesContainer}>
      <h3> Actuar para expandir</h3>
      <p>
        En base a los resultados de la etapa anterior se realiza un análisis en retrospectiva de las mejoras alcanzadas y los nuevos desafíos y en base a ello se decide iniciar o no una nueva implementación de la guía en un nuevo desafío acordado. Durante esta etapa el equipo directivo y docente realiza reconocimientos a colegas y estudiantes por el trabajo realizado.
      </p>
      <p><b>Escenarios de expansión:</b></p>
      <div className={style.parametrosContainer} style={{ marginBottom: '3rem' }}>
        <p className={style.parametros} style={{ backgroundColor: '#a2d8ec', border: '2px solid #00b0f0' }}><b>Escenario 1</b><br /> El equipo directivo junto a los docentes decide continuar con la expansión. En ese caso se repite el proceso, pero con un nuevo alcance o desafío.  </p>
        <p className={style.parametros} style={{ backgroundColor: '#a2d8ec', border: '2px solid #00b0f0' }}><b>Escenario 2</b><br /> El equipo decide continuar con el mismo desafío. En este caso se repite el proceso, pero con el mismo alcance e incluyendo las mejoras identificadas.</p>
        <p className={style.parametros} style={{ backgroundColor: '#a2d8ec', border: '2px solid #00b0f0' }}><b>Escenario 3</b><br /> El equipo decide no continuar con la implementación de la guía y mantener las mejoras logradas. </p>
      </div>
      <div style={{ border: "3px solid #00b0f0" }}>
        <TablaExpandirCambio />
      </div>
    </main>
  );
}
