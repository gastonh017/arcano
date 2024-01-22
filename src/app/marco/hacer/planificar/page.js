import Image from 'next/image'

export default function Planificar() {
  return (
    <main>
      <h3> Planificar a Conciencia</h3>

      <p>
        Todas las actividades de la primera etapa se realizan mediante la
        facilitación de <b>talleres</b> colaborativos o espacios de trabajo creativos
        en los que el equipo kaizen completa distintos <b>lienzos</b> que permiten
        plasmar las ideas y acuerdos en elementos visuales y, también de
        talleres de capacitación para nivelar el conocimiento sobre la guía y la
        temática de calidad.
      </p>
      <Image 
src='/images/svg/planificar.png'
width={400}
height={400}
alt='ciclo'
/>
    </main>
  );
}
