import TablaExpandirCambio from './tablaExpandirCambio'

export default function ExpandirCambio() {
  return (
    <main style={{padding:"6rem 2rem 1rem"}}>
      <h3> Actuar para expandir</h3>
      <p>
      En base a los resultados de la etapa anterior se realiza un análisis en retrospectiva de las mejoras alcanzadas y los nuevos desafíos y en base a ello se decide iniciar o no una nueva implementación de la guía en un nuevo desafío acordado. Durante esta etapa el equipo directivo y docente realiza reconocimientos a colegas y estudiantes por el trabajo realizado. 
      </p>
      <TablaExpandirCambio />
    </main>
  );
}
