import TablaPlanificar from './tablaPlanificar';
import style from '../page.module.css'

export default function Planificar() {
  return (
    <main className={style.stagesContainer}>
      <h3> Planificar a Conciencia</h3>
      <p>
        Todas las actividades de la primera etapa se realizan mediante la
        facilitación de <b>talleres</b> colaborativos o espacios de trabajo creativos
        en los que el equipo kaizen completa distintos <b>lienzos</b> que permiten
        plasmar las ideas y acuerdos en elementos visuales y, también de
        talleres de capacitación para nivelar el conocimiento sobre la guía y la
        temática de calidad.
      </p>
      <p>Se planifica la <b>integración de la guía</b> a la gestión institucional</p>
      <div style={{ border: "3px solid #e69500" }}  >
        <TablaPlanificar />
      </div>
    </main>
  );
}
