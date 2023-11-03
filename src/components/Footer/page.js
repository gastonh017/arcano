import styles from '@/components/Footer/style.module.css'
import Images from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.container}>
      
      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/whatsapp.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
        />
        <p className={styles.text}>whatsapp</p>
      </div>

      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/facebook.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
        />
        <p className={styles.text}> facebook </p>
      </div>

      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/instagram.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
        />
        <p className={styles.text}>instagram</p>
      </div>

      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/phone.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
        />
        <p className={styles.text}> +54 9 011 5555-5555</p>
      </div>

      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/map.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
        />
        <p className={styles.text}>Carlos Pellegrini 333 - CABA - Argentina</p>
      </div>

      <div className={styles.logoContainer}>
        <Images
          src='/images/svg/mail.svg'
          width={20}
          height={20}
          alt='logo'
          className={styles.logo}
          />
          <p className={styles.text}>unmail@arcano.com</p>
      </div>

    </footer>
  )
}