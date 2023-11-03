"use client"

import styles from '@/components/Contacto/style.module.css'

export default function Contacto() {
  return (
    <section className={styles.container}>
      <h2 className={styles.text}>Contactate con nosotros</h2>
      <button
        onClick={() => { }}
        className={styles.buttom}
      >
        Escribinos!
      </button>
    </section>
  )
}