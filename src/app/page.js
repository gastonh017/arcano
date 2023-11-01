// import Image from 'next/image'
// import styles from './page.module.css'
import Redes from '@/components/Redes/page';
import Contacto from '@/components/Contacto/page';
import Footer from '@/components/Footer/page';
import { imageOptimizer } from 'next/dist/server/image-optimizer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title> Arcano Ingenieria en Calidad</title>
    </Head>
    
    <main>
      
      <h1>HOLA !!!</h1>

      <Redes />
      <Contacto />
    </main>
    </>
  )
}
