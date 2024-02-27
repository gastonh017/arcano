import Image from "next/image";
import SerCard from "./SerCard";
import styles from "./ser.module.css";

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
      <h1>Protagonistas y Valores</h1>
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
      <br />
      <h2>Valores</h2>
      <div className={styles.contenedorCards}>
        <div className={styles.card} style={{ width: "12rem" }}>
          <Image
            src="/images/ser/sercard1.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          />
          <div className={styles.cardBody1}>
            <h5 className={styles.cardTitle}>{valores[0].title}</h5>
            <p className={styles.cardText}>{valores[0].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          <Image
            src="/images/ser/sercard2.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          />
          <div className={styles.cardBody2}>
            <h5 className={styles.cardTitle}>{valores[1].title}</h5>
            <p className={styles.cardText}>{valores[1].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          <Image
            src="/images/ser/sercard3.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          />
          <div className={styles.cardBody3}>
            <h5 className={styles.cardTitle}>{valores[2].title}</h5>
            <p className={styles.cardText}>{valores[2].text}</p>
          </div>
        </div>
        <div className={styles.card} style={{ width: "12rem" }}>
          <Image
            src="/images/ser/sercard4.png"
            className={styles.cardImgTop}
            alt="imagen respeto"
            width={400}
            height={477}
          />
          <div className={styles.cardBody4}>
            <h5 className={styles.cardTitle}>{valores[3].title}</h5>
            <p className={styles.cardText}>{valores[3].text}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
