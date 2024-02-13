import TablaVerificar from "./tablaVerificar";

export default function Verificar() {
  return (
    <main style={{ padding: "6rem 2rem 1rem" }}>
      <h3> Verificar que haya mejora y entrega de valor</h3>
      <p>
        Se implementa el eje de valoracion de los <b>resultados</b> y la
        <b>entrega de valor</b>. El equipo identifica las métricas que le
        permitirán detectar las oportunidades de mejora y evaluar la entrega de
        valor
      </p>
      <TablaVerificar />
    </main>
  );
}
