import styles from "./nosotros.module.css";
import Image from "next/image";
import ImagenNosotros from "../../../public/images/imagenNosotros.jpeg";

export default function Marco() {
  return (
    <main className={styles.mainNosotros} style={{ padding: "6rem 2rem 1rem" }}>
      <h1 className={styles.titulo}>Nosotros</h1>
      <p className={styles.parrafo}>
        Somos un equipo de profesionales que colaboramos con organizaciones
        líderes en el proceso de formación del individuo como ciudadano.
        Reconocemos que estas instituciones enfrentan importantes desafíos
        debido a los profundos cambios sociales a nivel global que ponen a
        prueba su capacidad para alcanzar este objetivo. Con este fin, hemos
        desarrollado un marco de trabajo que facilita la integración de Kaizen
        en el proceso de gestión institucional. Nuestro objetivo es acompañar a
        las instituciones educativas a través de la mejora continua de su
        gestión organizacional. Nuestro enfoque se fundamenta en un conjunto de
        prácticas sólidas y comprobadas que ayudan a las escuelas a alcanzar sus
        metas educativas y a preparar a los estudiantes para enfrentar los
        desafíos del mundo moderno. Estamos comprometidos con el éxito de
        nuestras instituciones educativas asociadas y con el desarrollo integral
        de los estudiantes como ciudadanos responsables y comprometidos con su
        comunidad y su entorno social.
      </p>
      <h2 className={styles.tituloSecundario}>Nuestro Marco de Trabajo</h2>
      <p className={styles.parrafo}>
        Nuestro marco de trabajo busca Cultivar el hábito de mejorar el proceso
        de formación de ciudadanos del mañana, promoviendo prácticas sostenibles
        que aseguren que el aprendizaje de las habilidades cívicas integrando la
        metodología Kaizen a ese proceso. tiene un enfoque basado en:
        <ul>
          <li>Perspectiva de calidad.</li>

          <li>
            Construcción iterativa e incremental a partir de un marco de
            abordaje inicial.
          </li>

          <li>
            Construida en colaboración con instituciones educativas y validada
            por expertos.
          </li>
        </ul>
      </p>
      <Image
        src={ImagenNosotros}
        width={630}
        height={400}
        alt="nosotros"
        className={styles.imagenNosotros}
      />
    </main>
  );
}
