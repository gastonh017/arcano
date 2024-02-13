import Image from 'next/image'
import Link from "next/link";

export default function Hacer() {
  return (
    <main style={{ padding: "6rem 2rem 1rem" }}>
      <h1>Flujo del Hacer</h1>
      <p> El Flujo del Hacer representa las etapas de la implementación</p>
      <Image
        src='/images/svg/ciclo del hacer.png'
        width={225}
        height={225}
        alt='ciclo'
      />
      <h3>Etapas</h3>
      <p>
        La puesta en marcha de las cuatro etapas se realiza en iteraciones, es
        decir, en breves ciclos de tiempo en los que se espera lograr un pequeño
        incremento de valor en base al cual se realizarán las mejoras para la
        siguiente iteración.
      </p>
      <li><Link href="/marco/hacer/planificar" > Planificar a Conciencia </Link></li>

      <li><Link href="/marco/hacer/iterativaEIncremental" > Hacer en forma iterativa e incremental </Link> </li>
      <li>Verificarque haya mejora y entrega de valor </li>
      <li>Actuar para expandir el cambio</li>
      <h3>Planificar a Conciencia</h3>
      <p>
        Todas las actividades de la primera etapa se realizan mediante la
        facilitación de talleres colaborativos o espacios de trabajo creativos
        en los que el equipo kaizen completa distintos lienzos que permiten
        plasmar las ideas y acuerdos en elementos visuales y, también de
        talleres de capacitación para nivelar el conocimiento sobre la guía y la
        temática de calidad.
      </p>

    </main>
  );
}
