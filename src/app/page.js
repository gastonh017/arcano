// import Image from 'next/image'
// import styles from './page.module.css'
import Redes from "@/components/Redes/page";
import Contacto from "@/components/Contacto/page";
import Carrusel from "@/components/Carrusel/carrusel";
// import Footer from "@/components/Footer/page";
// import { imageOptimizer } from "next/dist/server/image-optimizer";
import "@/app/globals.css";

export default function Home() {
  return (
    <>
      <main>
        <Carrusel />
        <h1 className="index-container">Home</h1>
        <Redes />
        <Contacto />
      </main>
    </>
  );
}
