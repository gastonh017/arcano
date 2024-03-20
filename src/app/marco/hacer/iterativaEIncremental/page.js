import Tabla from './tablaIterativeEIncremental';
import style from '../page.module.css';

export default function IterativaEIncremental() {
  return (
    <main className={style.stagesContainer}>
      <h3> Hacer en Forma Iterativa e Incremental</h3>
      <p>
        En base al desafío acordado en la etapa <i><b>Planificar a Conciencia</b></i> se lleva a cabo plan de
        trabajo en iteraciones y crea rutinas y procedimientos.
      </p>
      <div style={{ border: "3px solid #794dff" }}  >
        <Tabla />
      </div>
    </main>
  );
}
