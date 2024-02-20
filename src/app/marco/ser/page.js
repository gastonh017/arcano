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
    <main style={{ padding: "6rem 2rem 1rem", backgroundColor: "#7dd0be"  }}>
      <h1>Protagonistas y Valores</h1>
      <br />
      <h2>Protagonistas</h2>
      <ul>
      <li>Equipo Kaizen</li>
        <li>Facilitadores</li>
        <li>Educadores</li>
        <li>Estudiantes</li>
        <li>Comunidad de Referencia</li>
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
