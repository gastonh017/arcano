// import Image from "next/image";
import styles from "./ser.module.css";

const protaInfo =[
{
  id: 1,
  title:'Equipo Kaizen',
  description: 'Conformado por los directores, vicedirectores y secretarios. Este equipo impulsa y se compromete con la implementación de esta guía.',
  colorText: '#e69500',
  bkgColor: '#f2e3c9',
},
{
  id: 2,
  title:'Facilitadores',
  description: 'Están formados en el entendimiento y uso de las prácticas que propone la guía y acompañan y facilitan su implementación.',
  colorText: '#794dff',
  bkgColor: '#dfd7f7',
},
{
  id: 3,
  title:'Educadores y equipo de orientación vocacional',
  description: 'Facilitan el proceso de desarrollo de las habilidades ciudadanas a través de las prácticas creadas en colaboración con el equipo kaizen en el contexto áulico.',
  colorText: '#ec4e70',
  bkgColor: '#f6e0e0',
},
{
  id: 4,
  title:'Estudiantes',
  description: 'Son protagonistas activos del proceso de aprendizaje de las habilidades ciudadanas. Participan activamente de la experiencia escolar de la implementación de la guía',
  colorText: '#00b0f0',
  bkgColor: '#c9e9f4',
},
{
  id: 5,
  title:'Comunidad de Referencia',
  description: 'Incluye a las familias que acompañan la trayectoria educativa. También a los actores sociales que interactúan y acompañan las iniciativas que el equipo kaizen emprenda a partir de la guía.',
  colorText: '#e69500',
  bkgColor: '#f2e3c9',
},
]

const valores = [
  {
    image: "/images/ser/sercard1.png",
    title: "Respeto",
    text: "El respeto genuino de los derechos de los niños, niñas y adolescentes es el primer paso para el cambio",
  },
  {
    image: "/images/ser/sercard2.png",
    title: "Compromiso",
    text: "El compromiso con la mejora continua es un valor fundamental para el crecimiento y la innovación.",
  },
  {
    image: "/images/ser/sercard1.png",
    title: "Promover la Mejora Continua",
    text: "Promover la mejora continua en procesos iterativos e incrementales es la clave para desarrollo",
    
  },
  {
    image: "/images/ser/sercard2.png",
    title: "Identidad Cultural",
    text: "La identidad cultural es un factor fundamental en el concepto de ciudadanía y las narrativas culturales.", 
  },
];

export default function Protagonistas() {
  return (
    
    <main className={styles.mainSer}>
      <h1 style={{marginBottom: '0.5rem'}}>Protagonistas y Valores</h1>
      <h2>Protagonistas</h2>
      <div className={styles.stepsCardsContainer}>
    { protaInfo.map((data,id) => 
    <div style={{
      backgroundColor: `${data.bkgColor}`,
      borderColor: `${data.colorText}`,
      border: `2px solid ${data.colorText}`,
      width:' 12rem',
      height: '15rem'
    }} > 
    <h3 style={{ color: `${data.colorText}`, textAlign: 'center', padding: '0.5rem' }}>{data.title}</h3>
    <p style={{ color: `${data.colorText}`, textAlign: 'justify', padding: '0.2rem'}}>{data.description}</p>
    </div>
    
    )

    }
      </div>
      {/* <h1>Protagonistas y Valores</h1>
      <br />
      <h2>Protagonistas</h2>
      <ul>
      <li>Equipo Kaizen: </li>
      <p>Conformado por los directores, vicedirectores y secretarios. Este equipo impulsa y se compromete con la implementación de esta guía.</p>
        <li>Facilitadores:</li> 
        <p>Están formados en el entendimiento y uso de las prácticas que propone la guía y acompañan y facilitan su implementación.</p>
        <li>Educadores y equipo de orientación voccional: </li>
        <p> Facilitan el proceso de desarrollo de las habilidades ciudadanas a través de las prácticas creadas en colaboración con el equipo kaizen en el contexto áulico.</p>
        <li>Estudiantes:</li>
        <p>Son protagonistas activos del proceso de aprendizaje de las habilidades ciudadanas. Participan activamente de la experiencia escolar de la implementación de la guía</p>
        <li>Comunidad de Referencia: </li>
        <p>Incluye a las familias que acompañan la trayectoria educativa. También a los actores sociales que interactúan y acompañan las iniciativas que el equipo kaizen emprenda a partir de la guía.</p>
      </ul>
      <br /> */}
      <h2>Valores</h2>
      <div className={styles.contenedorCards}>
        <div className={styles.card} style={{ width: "12rem" }}>
          {/* <Image
            src="/images/ser/sercard1.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          /> */}
          <div className={styles.cardBody1}>
            <h5 className={styles.cardTitle}>{valores[0].title}</h5>
            <p className={styles.cardText}>{valores[0].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          {/* <Image
            src="/images/ser/sercard2.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          /> */}
          <div className={styles.cardBody2}>
            <h5 className={styles.cardTitle}>{valores[1].title}</h5>
            <p className={styles.cardText}>{valores[1].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          {/* <Image
            src="/images/ser/sercard3.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          /> */}
          <div className={styles.cardBody3}>
            <h5 className={styles.cardTitle}>{valores[2].title}</h5>
            <p className={styles.cardText}>{valores[2].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          {/* <Image
            src="/images/ser/sercard4.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          /> */}
          <div className={styles.cardBody4}>
            <h5 className={styles.cardTitle}>{valores[3].title}</h5>
            <p className={styles.cardText}>{valores[3].text}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
