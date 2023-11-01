import Images from 'next/image'
import styles from '@/components/Redes/styles.module.css'

export default function Footer() {
  const logoSize = 40;
  return (
    <section className={styles.container}>
      <article>
        <h2 className={styles.title}>Seguinos en nuestras redes</h2>
        <p  className={styles.description}>Para que puedas acceder a nuestras novedades</p>
      </article>

      <article className={styles.containerLogo} >

        <Images
          src='/images/svg/facebook.svg'
          width={logoSize}
          height={logoSize}
          alt='logo'
          className={styles.logo}
        />
        <Images
          src='/images/svg/instagram.svg'
          width={logoSize}
          height={logoSize}
          alt='logo'
          className={styles.logo}
        />
        <Images
          src='/images/svg/youtube.svg'
          width={logoSize}
          height={logoSize}
          alt='logo'
          className={styles.logo}
        />
        <Images
          src='/images/svg/linkedin.svg'
          width={logoSize}
          height={logoSize}
          alt='logo'
          className={styles.logo}
        />

      </article>


    </section>
  )
}