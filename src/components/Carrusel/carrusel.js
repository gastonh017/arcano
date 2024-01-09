"use client";
import { useRef, useEffect } from "react";
import Slide from "@/components/Slide/slide";
import "@/components/Carrusel/carrusel.css";

export default function Carrusel() {
  const slider = useRef(null);

  const next = () => {
    if (slider.current.children.length > 0) {
      //corrimiento del contenedor hacia la izquierda
      slider.current.style.transition = "transform 500ms ease-in-out";
      slider.current.style.transform = "translateX(-100vw)";
      //reposiciono el contenedor a su lugar inicial
      const transition = () => {
        slider.current.style.transition = "none";
        slider.current.style.transform = "translateX(0)";
        slider.current.appendChild(slider.current.children[0]);
        slider.current.removeEventListener("transitionend", transition);
      };
      slider.current.addEventListener("transitionend", transition);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carrusel-container">
      <section className="carrusel-container" ref={slider}>
        <Slide
          width={1380}
          height={250}
          url="/images/banner/banner01.png"
          text="Propósito"
        />
        <Slide
          width={1380}
          height={250}
          url="/images/banner/banner02.png"
          text="Prácticas"
        />
        <Slide
          width={1380}
          height={250}
          url="/images/banner/banner03.png"
          text="Implementación"
        />
      </section>
      {/* <section className="buttons-container">
        <button className='button-style btn-left' onClick={() => previous()} >{`<`}</button>
        <button className='button-style btn-right' onClick={() => next()} >{`>`}</button>
      </section> */}
    </div>
  );
}
