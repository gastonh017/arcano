import Image from "next/image";

export default function Forma() {
  return (
    <main style={{padding:"6rem 2rem 1rem"}}>
      <h3> Hacer en Forma Iterativa e Incremental</h3>
      <p>
        En base al desafío acordado en la etapa anterior se lleva a cabo plan de
        trabajo en iteraciones y crea rutinas y procedimientos.
      </p>
      <Image src="/images/svg/forma.png" width={400} height={350} alt="ciclo" />
    </main>
  );
}
