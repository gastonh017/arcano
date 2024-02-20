'use client'
// import DOMPurify from 'dompurify';
// import { JSDOM } from 'jsdom';
import { useEffect ,useState } from 'react';
import Descripcion from './descripcion';
import styles from './navbar.module.css';



const marco = [
  {
    id: 1,
    text: '<p>Constituye un <b>conjunto de prácticas</b> que agregan valor a las instituciones educativas en su dimensión organizativa, y a partir de ello, acompañan el aprendizaje de las habilidades ciudadanas en sus estudiantes.</p>',
    colorCard: '#ec4e70',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 2,
    text: 'No es una metodología sino un <b>marco de trabajo</b> basado en la integración de <b>Kaizen</b> en pequeños ciclos que habilitan el <b>desarrollo gradual de estas habilidades y el entendimiento de su efecto en la mejora institucional</b> a través de radiadores de información que dialogan con el contexto educativo.',
    colorCard: '#794dff',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 3,
    text: 'Considera una solución a partir de la integración de Kaizen a la dinámica de los flujos de valor de la institución educativa. Acompaña el proceso de descubrimiento del desafío y facilita su identificación en los flujos de valor organizacionales. ',
    colorCard: '#00b0f0',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 4,
    text: 'Entiende que las habilidades ciudadanas son el conjunto de conocimientos, actitudes y habilidades culturales, cognitivas, emocionales y comunicativas que, articuladas entre sí, hacen posible que la persona actúe de manera constructiva en el dominio cívico.',
    colorCard: '#e69500',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 5,
    text: 'Instala el hábito de observar la gestión institucional y crear prácticas sostenibles que garanticen el máximo nivel de aprendizaje de las habilidades ciudadanas requeridas para el ejercicio de una ciudadanía responsable y el conocimiento de los efectos de su desarrollo en el desempeño institucional. ',
    colorCard: '#ec4e70',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 6,
    text: 'Incorpora una cultura basada en la calidad, el reconocimiento de los errores y problemas como una oportunidad de crecimiento y la transformación de la mejora en un hábito',
    colorCard: '#794dff',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 7,
    text: 'Promueve prácticas que dotan a la institución de la habilidad para producir cambios en ciclos de innovación y expansión.',
    colorCard: '#00b0f0',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 8,
    text: 'Construye acuerdos de colaboración para sostener la confianza y guiar el proceso de implementación de esta guía. Fortalece con acuerdos la comunicación con aquellos actores que interactúan activamente con la institución haciendo hincapié en la integración de las familias y su comunidad de referencia.',
    colorCard: '#e69500',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 9,
    text: 'Los lineamientos contienen las definiciones que facilitan la implementación de las prácticas que propone la guía. Se dividen en tres dominios. Los lineamientos son los siguientes:',
    colorCard: '#ec4e70',
    list: true,
    contentList: ['MOTIVACIÓN', 'FLUJO', 'VALORES'],
    listStyle: 'disc',
  },
  {
    id: 10,
    text: 'La <b>motivación</b> es acompañar a las instituciones educativas a través de la mejora continua de su gestión organizacional para que, a través de un conjunto de prácticas, potencien el aprendizaje de las habilidades ciudadanas en los estudiantes. ',
    colorCard: '#794dff',
    list: false,
    contentList: [],
    listStyle: 'disc',
  },
  {
    id: 11,
    text: 'Los <b>valores</b> son las cualidades que son importantes poner en juego al momento de integrar la guía a la gestión institucional:',
    colorCard: '#00b0f0',
    list: true,
    contentList: ['El respeto genuino de los derechos de los niños, niñas y adolescentes es el primer paso para el cambio', 'El compromiso con la mejora continua es un valor fundamental para el crecimiento y la innovación.', 'Promover la mejora continua en procesos iterativos e incrementales es la clave para desarrollo', 'La identidad cultural es un factor fundamental en el concepto de ciudadanía y las narrativas culturales.'],
    listStyle: 'decimal',
  },
  {
    id: 12,
    text: 'El <b>flujo de valor</b> son las etapas para la implementación de la guía: Planificar a conciencia, Hacer en forma iterativa e incremental, verificar que haya mejora y entrega de valor y actuar para expandir el cambio. ',
    colorCard: '#e69500',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 13,
    text: 'Los protagonistas son:',
    colorCard: '#ec4e70',
    list: true,
    contentList: ['Equipo kaizen', 'Educadores y equipo de orientación vocacional', 'Facilitadores', 'Estudiantes', 'Comunidad'],
    listStyle: 'decimal',
  },
  {
    id: 14,
    text: '<b>Equipo kaizen</b>: Conformado por los directores, vicedirectores y secretarios. Este equipo impulsa y se compromete con la implementación de esta guía. ',
    colorCard: '#794dff',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 15,
    text: '<b>Educadores y equipo de orientación vocacional</b>: Facilitan el proceso de desarrollo de las habilidades ciudadanas a través de las prácticas creadas en colaboración con el equipo kaizen en el contexto áulico. ',
    colorCard: '#00b0f0',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 16,
    text: '<b>Estudiantes</b>: Son protagonistas activos del proceso de aprendizaje de las habilidades ciudadanas. Participan activamente de la experiencia escolar de la implementación de la guía',
    colorCard: '#e69500',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 17,
    text: '<b>Comunidad</b>: Incluye a las familias que acompañan la trayectoria educativa. También a los actores sociales que interactúan y acompañan las iniciativas que el equipo kaizen emprenda a partir de la guía.',
    colorCard: '#ec4e70',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 18,
    text: '<b>Facilitadores</b>: Están formados en el entendimiento y uso de las prácticas que propone la guía y acompañan y facilitan su implementación.',
    colorCard: '#794dff',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  },
  {
    id: 19,
    text: '<b>Los ARCANOS</b>: Los arcanos acompañan el proceso de implementación.',
    colorCard: '#00b0f0',
    list: false,
    contentList: [], 
    listStyle: 'disc',
  }
]


// const Verify = (text) => {
//  return DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(text)
// }



export default function Marco() {
  // const [ampliar, setAmpliar] = useState(false);
  
  // const arrayLength = 30;

  // function Description(description) {
  //   let stringResult = '';
  //   description.length > arrayLength ? stringResult = description.slice(0, arrayLength) + '...' : stringResult = description;
  //   return stringResult
  // }

  // function ContraerTexto(text){

  // }

  return (
    <main className={styles.mainMarco}>
      <h1 style={{ fontSize: '3rem' }}>Principios</h1>

      <section className={styles.cardContainer} >
        {marco.map((el, id) =>
          // <article key={el.id} className={styles.card} style={{ backgroundColor: `${el.colorCard}` }}>
          //   <h2>{el.id}</h2>
          //   {/* <div dangerouslySetInnerHTML={{__html: Verify(el.text)}} /> */}
          //   <div>{el.text}</div>
          //   <ul style={{ paddingLeft: '2rem', lineHeight: '1.2', listStyleType: `${el.listStyle}` }}>

          //     {(el.list && ampliar) ?
          //       el.contentList.map((item, id) => <li key={id} style={{ padding: '.5rem 0' }}>{item}</li>)
          //       : ''
          //     }
          //   </ul>
          //   {ampliar ? <button onClick={() => setAmpliar(false)} >Ampliar</button>: <button onClick={() => setAmpliar(true)} >Reducir</button>
          //   } 
          // </article>
          < Descripcion data={el} key={id} />
        )}
      </section>

      {/* <ul>
        poner en tarjetas numeradas ???
        <li>
          {" "}
          Constituye un <b>conjunto de prácticas</b> que agregan valor a las
          instituciones educativas en su dimensión organizativa, y a partir de
          ello, acompañan el aprendizaje de las habilidades ciudadanas de sus
          estudiantes{" "}
        </li>
        <li>
          {" "}
          No es una metodología sino un <b>marco de trabajo</b> basado en la
          integración de <b>Kaizen</b> en pequeños ciclos que habilitan el{" "}
          <b>
            desarrollo gradual de estas habilidades y el entendimiento de su
            efecto en la mejora institucional
          </b>{" "}
          a través de radiadores de información que dialogan con el contexto
          educativo
        </li>
        <li>
          {" "}
          Considera una solución a partir de la integración de Kaizen a la
          dinámica de los flujos de valor de la institución educativa. Acompaña
          el proceso de descubrimiento del desafio y facilita su identificación
          en los flujos de valor organizacionales
        </li>
        <li>
          {" "}
          Entiende que las habilidades ciudadanas son el conjunto de
          conocimientos, actitudes y habilidades culturales, cognitivas,
          emocionales y comunicativas que, articulas entre sí, hacen posible que
          la persona actue de manera constructiva en el dominio cívico.
        </li>
        <li>
          {" "}
          Instala el hábito de observar la gestión institucional y crear
          práctivas sostenibels que garanticen el máximo nivel de apredizaje de
          las habilidades ciudadanas requeridas para el ejercicio de una
          ciudadanía responsable y el conocimiento de los efectos de su
          desarrollo en el desempeño institucional
        </li>
        <li>
          {" "}
          Incorpora una cultura basada en la calidad, el reconocimiento de los
          errores y problemas como una oportunidad de crecimiento y la
          transformación de la mejora en un hábito
        </li>
        <li>
          {" "}
          Promueve prácticas que dotan a la institución de la habilidad para
          producir cambios en ciclos de innovación y expansión.
        </li>
        <li>
          {" "}
          Construye acuerdos de colaboración para sostener la confianza y guiar
          el proceso de implementación de esta guía. Fortalece con acuerdos la
          comunicación con aquellos actores que interactúan activamente con la
          institución haciendo hincapié en la integración de las familias y su
          comunidad de referencia.
        </li>
        <li>
          {" "}
          Los protagonistas son: Equipo kaizen Educadores y equipo de
          orientación vocacional Facilitadores Estudiantes Comunidad
        </li>
        <li>
          Equipo kaizen: Conformado por los directores, vicedirectores y
          secretarios. Este equipo impulsa y se compromete con la implementación
          de esta guía.{" "}
        </li>
        <li>
          Educadores y equipo de orientación vocacional: Facilitan el proceso de
          desarrollo de las habilidades ciudadanas a través de las prácticas
          creadas en colaboración con el equipo kaizen en el contexto áulico.{" "}
        </li>
        <li>
          Estudiantes: Son protagonistas activos del proceso de aprendizaje de
          las habilidades ciudadanas. Participan activamente de la experiencia
          escolar de la implementación de la guía
        </li>{" "}
      </ul> */}
    </main>
  );
}
