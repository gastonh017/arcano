'use client'
import Image from 'next/image';
import Link from "next/link";
import styles from './page.module.css'

const cards = [
  {
    href: '/marco/hacer/planificar',
    text: 'Planificar a Conciencia',
    colorText: '#e69500',
    bkgColor: '#f2e3c9',
    src: '/images/hacerImages/planificarAvatar.png',
  },
  {
    href: '/marco/hacer/iterativaEIncremental',
    text: 'Hacer en forma iterativa e incremental',
    colorText: '#794dff',
    bkgColor: '#dfd7f7',
    src: '/images/hacerImages/iterativaAvatar.png',
  },
  {
    href: '/marco/hacer/verificar',
    text: 'Verificar que haya mejora y entrega de valor',
    colorText: '#ec4e70',
    bkgColor: '#f6e0e0',
    src: '/images/hacerImages/verificarAvatar.png',
  },
  {
    href: '/marco/hacer/expandirCambio',
    text: 'Actuar para expandir el cambio',
    colorText: '#00b0f0',
    bkgColor: '#c9e9f4',
    src: '/images/hacerImages/actuarAvatar.png',
  },

]

export default function Hacer() {
  return (
    <main className={styles.mainHacer}>

      {/* <section className={styles.mainSection}>
        <h1>Flujo del Hacer</h1>
        <div>
          <p> El Flujo del Hacer representa las etapas de la implementación</p>
          <Image
            src='/images/hacerImages/flujoHacer-1.png'
            width={425}
            height={425}
            alt='ciclo'
            className={styles.img}
          />
        </div>
      </section> */}

      <section className={styles.stepsSection}>
        <h3>Etapas</h3>
        <p>
          La puesta en marcha de las cuatro etapas se realiza en iteraciones, es
          decir, en breves ciclos de tiempo en los que se espera lograr un pequeño
          incremento de valor en base al cual se realizarán las mejoras para la
          siguiente iteración.
        </p>
        <div className={styles.stepsCardsContainer}>

          {/* <Link href={cards[0].href} style={{ backgroundColor: `${cards[0].bkgColor}` }} className={styles.card1}>
            <p style={{ color: `${cards[0].colorText}` }}>{cards[0].text}</p>
            <Image
              src={cards[0].src}
              width={210}
              height={447}
              alt='ciclo'
              className={styles.imgAvatar}
            />
          </Link>

          <Link href={cards[1].href} style={{ backgroundColor: `${cards[1].bkgColor}` }} className={styles.card2}>
            <p style={{ color: `${cards[1].colorText}` }}>{cards[1].text}</p>
            <Image
              src={cards[1].src}
              width={210}
              height={447}
              alt='ciclo'
              className={styles.imgAvatar}
            />
          </Link>

          <Link href={cards[2].href} style={{ backgroundColor: `${cards[2].bkgColor}` }} className={styles.card3}>
            <p style={{ color: `${cards[2].colorText}` }}>{cards[2].text}</p>
            <Image
              src={cards[2].src}
              width={210}
              height={447}
              alt='ciclo'
              className={styles.imgAvatar}
            />
          </Link>

          <Link href={cards[3].href} style={{ backgroundColor: `${cards[3].bkgColor}` }} className={styles.card3}>
            <p style={{ color: `${cards[3].colorText}` }}>{cards[3].text}</p>
            <Image
              src={cards[3].src}
              width={210}
              height={447}
              alt='ciclo'
              className={styles.imgAvatar}
            />
          </Link> */}
          {cards.map((el, id) =>
            <Link href={el.href} style={{ backgroundColor: `${el.bkgColor}`, borderColor: `${el.colorText}`, border: `2px solid ${el.colorText}` }} key={id} className={styles.card}>
              <p style={{ color: `${el.colorText}` }}>{el.text}</p>
              <Image
                src={el.src}
                width={202}
                height={441}
                alt='ciclo'
                className={styles.imgAvatar}
              />
            </Link>
          )}

        </div>
      </section>

      <section className={styles.planningSection}>
        <h3 >Planificar a Conciencia</h3>
        <p>
          Todas las actividades de la primera etapa se realizan mediante la facilitación de talleres colaborativos o espacios de trabajo creativos en los que el equipo kaizen completa distintos lienzos que permiten plasmar las ideas y acuerdos en elementos visuales y, también de talleres de capacitación para nivelar el conocimiento sobre la guía y la temática de calidad.
        </p>
      </section>

      <section className={styles.planningSection}>
        <h3 >Hacer de forma iterativa e incremental</h3>
        <p>
          En base al desafío acordado en la etapa anterior se lleva a cabo plan de trabajo en iteraciones y crea rutinas y procedimientos.
        </p>
        <p>
          La puesta en marcha se realiza en breves ciclos de tiempo en los que se espera lograr un pequeño incremento de valor en base al cual se realizarán las mejoras para la siguiente iteración.
        </p>

      </section>

      <section className={styles.planningSection}>
        <h3 >Verificar que haya mejora y entrega de valor</h3>
        <p>
        La institución identifica las métricas que le permitirán visualizar las oportunidades de mejora y evaluar la entrega de valor. Se plantean dos grupos de métricas. Por un lado, aquellas que reflejan el <b>grado de madurez</b> alcanzado por el estudiante en el desarrollo de una habilidad en un determinado periodo. Por el otro, aquellas que reflejan las <b>mejoras en la organización de la escuela</b>.
        </p>
      </section>

      <section className={styles.planningSection}>
        <h3 >Actuar para expandir</h3>
        <p>
        En base a los resultados de la etapa anterior se realiza un análisis en retrospectiva de las mejoras alcanzadas y los nuevos desafíos y en base a ello se decide iniciar o no una nueva implementación de la guía en un nuevo desafío acordado.
        </p>
      </section>

    </main>
  );
}
